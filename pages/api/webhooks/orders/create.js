// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { generateMembershipSvg } from '/utils/imageGenerator'
import { CC_MEMBERSHIP_CONTRACT_ADDRESS, CC_ACHIEVEMENTS_CONTRACT_ADDRESS, CC_ACHIEVEMENTS_FIRST_PURCHASE_TOKEN_ID, CC_ACHIEVEMENTS_NUMBER_ONE_FAN_TOKEN_ID, CC_ACHIEVEMENTS_FIVE_PURCHASES_TOKEN_ID, CC_HOODIE_PRODUCT_ID, CC_HAT_PRODUCT_ID, CC_SHIRT_PRODUCT_ID } from '/utils/constants'
const crypto = require("crypto");
const getRawBody = require("raw-body");

export default async function handler(req, res) {
  console.log("Order create event received.");

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const body = await getRawBody(req);
  const hmac = req.headers["x-shopify-hmac-sha256"];
  const secretKey = process.env['SHOPIFY_WEBHOOK_SECRET'];

  const hash = crypto
    .createHmac("sha256", secretKey)
    .update(body, "utf8", "hex")
    .digest("base64");

  // Compare our hash to Shopify's hash to verify integratity of request
  if (hash === hmac) {
    console.log("Request verified: hash matches hmac.");
    console.log("HMAC: " + hmac);

    console.log("Body: ", body.toString());
    const bodyJson = JSON.parse(body);

    const attributes = bodyJson.note_attributes;
    console.log("Attributes: ", attributes);
    const walletAddress = attributes?.filter(attribute => attribute.name == "Wallet Address")[0].value;
    console.log("Wallet address: ", walletAddress);

    const minterPrivateKey = process.env['CC_MINTER_PRIVATE_KEY']
    const sdk = ThirdwebSDK.fromPrivateKey(minterPrivateKey, "mumbai")

    const contract = await sdk.getContract(CC_ACHIEVEMENTS_CONTRACT_ADDRESS)

    //  Check if eligiblet for first purchase NFT 
    const nfts = await contract.erc1155.getOwned(walletAddress);

    console.log("NFTS: ", JSON.stringify(nfts))

    const achievementTokenIds = nfts.map(nft => nft.metadata.id);
    console.log("achievementTokenIds: ", JSON.stringify(achievementTokenIds))
    
    if (!achievementTokenIds.includes(CC_ACHIEVEMENTS_FIRST_PURCHASE_TOKEN_ID)) {
      console.log("Transferring first purchase NFT to address " + walletAddress + "..")
      await contract.erc1155.transfer(walletAddress, CC_ACHIEVEMENTS_FIRST_PURCHASE_TOKEN_ID, 1);
    } else {
      console.log("This wallet address already has a first purchase NFT: " + walletAddress + "..")
    }

    // Check if eligible for #1 fan NFT
    const lineItems = bodyJson.line_items
    const productIds = lineItems.map(item => item.product_id);
    console.log("PRODUCT IDS:", productIds);

    if (!achievementTokenIds.includes(CC_ACHIEVEMENTS_NUMBER_ONE_FAN_TOKEN_ID) &&
        productIds.includes(CC_HOODIE_PRODUCT_ID) &&
        productIds.includes(CC_HAT_PRODUCT_ID) &&
        productIds.includes(CC_SHIRT_PRODUCT_ID)) {

      console.log("Transferring #1 fan NFT to address " + walletAddress + "..")
      await contract.erc1155.transfer(walletAddress, CC_ACHIEVEMENTS_NUMBER_ONE_FAN_TOKEN_ID, 1)
    } else {
      console.log("This is not a number 1 fan purchase")
    }

    if (false) {
          console.log("Transferring five purchases NFT to address " + walletAddress + "..")
          await contract.erc1155.transfer(walletAddress, CC_ACHIEVEMENTS_FIVE_PURCHASES_TOKEN_ID, 1)
    }
    
    

    console.log("Done");

    res.status(200).send();
  } else {
    console.log("Request verification failed: hash DOES NOT match hmac.");
    console.log("HMAC: " + hmac);
    console.log("HASH: " + hash);
    res.status(403).send();
  }
}

// Next.js's body parser is great, but turn this off so we can access the raw body.
export const config = {
  api: {
    bodyParser: false,
  },
}