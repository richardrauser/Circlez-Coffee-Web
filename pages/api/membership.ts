// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { generateMembershipSvg } from '/utils/imageGenerator'
import { CC_MEMBERSHIP_CONTRACT_ADDRESS } from '/utils/constants'

const sharp = require('sharp')
const fs = require('fs')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // Consider further validation of data provided by client and more thorough error responses.
  if (req.method != "POST") {
    console.log("Request is not a POST")
    res.status(400).json({ error: 'Only posting allowed.' })
    return;
  }

  const body = JSON.parse(req.body)
  const color = body.color
  const ownerAddress = body.ownerAddress

  console.log("COLOR: " + color)
  console.log("OWNER: " + ownerAddress)

  if (!color) {
    console.log("Bad color.")
    res.status(400).json({ error: 'No colour supplied.' })
    return;
    // } else if (!ownerAddress || ownerAddress.length < 40) {
    //   console.log("Bad eth address.")
    //   res.status(400).json({ error: 'Invalid ethereum address.' })
    //   return;
  }

  try {
    const svg = generateMembershipSvg(color);

    // to generate unique file name.. you may want to improve this to avoid naming collisions.
    let timestamp = Date.now()
    const svgFileName = "public/generated/membershipImage" + timestamp + ".svg"
    const pngFileName = "public/generated/membershipImage" + timestamp + ".png"

    // Convert SVG to PNG.. some web3 services don't support SVG.
    fs.writeFileSync(svgFileName, svg)
    await sharp(svgFileName).png().toFile(pngFileName)

    // mint via 3rd web  
    const minterPrivateKey = process.env['CC_MINTER_PRIVATE_KEY']
    const sdk = ThirdwebSDK.fromPrivateKey(minterPrivateKey, "mumbai")

    const contract = await sdk.getContract(CC_MEMBERSHIP_CONTRACT_ADDRESS)

    console.log("Minting membership NFT..")

    // Mint the membership NFT
    const tx = await contract.erc721.mint({
      name: "Circlez Coffee Membership",
      description: "Circlez Coffee membership conferring numerous benefits.",
      image: fs.readFileSync(pngFileName), // This can be an image url or file
    });

    console.log("MINT TX: " + JSON.stringify(tx));

    const tokenId = tx.id;

    console.log("Transferring token ID " + tokenId + " to address " + ownerAddress + "..")

    await contract.erc721.transfer(ownerAddress, tokenId)

    console.log("Done");

    res.status(200).json(tx);

  } catch (error) {
    console.log("Minting error ocurred: " + error)
    res.status(500).json({ error: error })
  }
}
