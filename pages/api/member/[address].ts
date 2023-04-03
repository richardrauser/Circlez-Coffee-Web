// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { CC_MEMBERSHIP_CONTRACT_ADDRESS } from '/utils/constants'
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react"

const sharp = require('sharp')
const fs = require('fs')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // Consider further validation of data provided by client and more thorough error responses.
  if (req.method != "GET") {
    console.log("Request is not a GET")
    res.status(400).json({ error: 'Only GET method allowed.' })
    return;
  }

  try {
    const sdk = new ThirdwebSDK("mumbai")
    console.log("contract address: " + CC_MEMBERSHIP_CONTRACT_ADDRESS);
    const contract = await sdk.getContract(CC_MEMBERSHIP_CONTRACT_ADDRESS);
    const nfts = await contract.erc721.getOwned(req.query.address);

    res.status(200).json(nfts[0]);

  } catch (error) {
    console.log("members ocurred: " + error)
    res.status(500).json({ error: error })
  }
}
