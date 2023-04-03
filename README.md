This is a submission for the [Shopify x Thirdweb Replit Bounty](https://replit.com/bounties/@thirdwebShopify/build-a-shopify-bloc). It is a fully formed, functional demo of a gamified membership and rewards scheme built on the blockchain for a fictional coffee brand, Circlez Coffee. It demonstrates the technology of Replit, Shopify and Thirdweb, including Shopify Apps, Blockchain components, token gating, Thirdweb Minting and CommerceKit, along with their node packages and APIs.

You can see the Circlez Coffee website running [here](https://circlez-coffee.myshopify.com/).
You can see the Circlez Coffee Shopify storefront [here](https://circlez-coffee.myshopify.com/).

This Repl is meant to be used with the [Circlez Coffee Shopify app](https://github.com/richardrauser/circlez-coffee-shopify) for token-gating. That needs to be run locally when your Shopify storefront is in development mode, so go and do that first and follow the steps in that README.md, then fork this Repl and follow the steps here. 


## Getting Started

- You'll need to setup your Shopify storefront, tokengating app and extensions first, so [checkout this repo and follow the instructions in its README.md](https://github.com/richardrauser/circlez-coffee-shopify). Do this first.
- This Repl receives a callback from a webhook in Shopify whenever an order is created. This is where NFTs are created for achievements. Set up a webhook pointing at <your repl>/api/member/create from the Shopify admin dashboard for the Order Creation event.
-- Vist your Shopify store admin, go to Settings > Notifications, and see the webhooks section at bottom.
- You need to create smart contracts to support your own membership and loyalty scheme. Do this from the [Thirdweb Contracts dashboard](https://thirdweb.com/dashboard/contracts).
-- The main membership scheme should be an ERC-721 if you want to be able to allow users to select their own membership colour, as per this demo. This is because each membership NFT is a one-of-one, i.e. unique, because of the colour choice.
-- Achievements smart contracts should be ERC-1155s as as these are 1 of x NFTs, i.e. an edition NFT where each item in the edition.
- Configure the smart contract addresses and token IDs in utils/constants.js. You don't need to include as many as you find here if you want a simpler scheme.
 
Hit the run button to start the development server.
