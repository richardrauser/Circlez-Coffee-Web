import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <h2>What this project demonstrates</h2>
        <ul>
          <li>
            A membership, loyalty and gamified rewards system targetted at online shoppers.
          </li>
          <li>
            A fictional coffee brand, Circlez Coffee, taking advantage of said systems.
          </li>
          <li>
            Web3 functionality on the Mumbai Polygon blockchain (also suitable for Ethereum and other EVM compatible chains), with as much web3 jargon and concepts abstracted away as possible.
          </li>
          <li>
            Creating (i.e.minting) a user-customised membership pass from a business's own website sent directly to an customer's crypto wallet at no cost to the customer.
          </li>
        </ul>

        <h2>How this was built</h2>
        <ul>
          <li>
            <a target="_blank" href="https://replit.com">Replit</a> used for the development environment and hosting of the Circlez Coffee website and backend services. This repl created from the standard <a target="_blank" href="https://replit.com/@templates/Nextjs-The-Reactjs-Framework"> Replity NextJS template</a>.
          </li>
          <li>
            <a target="_blank" href="https://thirdweb.com/solutions/minting">Thirdweb Minting</a> used for codeless deployment and management of:
            <ol>
              <li>
                the Circlez Membership contract (ERC-721) allowing users to claim unique, customised one-of-one membership NFTs
              </li>
              <li>
                Circlez Membership Achievements (ERC-1555) allowing users to collect badges from multi-edition NFTs representing unlocked achievements that earn rewards.
              </li>
            </ol>
          </li>
          <li>
            <a target="_blank" href="https://www.shopify.com/">Shopify</a> for build, management and hosting of the Circlez Coffee online store.
          </li>
          <li>
            <a target="_blank" href="https://shopify.dev/docs/apps">Shopify Apps</a> for extensions that unlock token gated discounts and merchandise in the Circlez Coffee Shopify web store.
          </li>
          <li>
            <a target="_blank" href="https://shopify.dev/docs/api/blockchain">Shopify Blockchain components</a> for connecting a wallet and gating discounts and merch in Shopify apps.
          </li>
          <li>
            <a target="_blank" href="https://shopify.dev/docs/api/admin-graphql/unstable/objects/GateConfiguration">Shopify Gates API</a> for for build and management of token gates.
          </li>
          <li>
            <a target="_blank" href="https://www.npmjs.com/package/@shopify/shopify-api">shopify/shopify-api Node SDK</a> added for interacting with Shopify.
          </li>
          <li>
            <a target="_blank" href="https://www.polygon.com/">Polygon</a> Mumbai testnet for the blockchain containing the membership and achievement NFTS.
          </li>
          <li>
            <a target="_blank" href="https://www.npmjs.com/package/@thirdweb-dev/sdk">ThirdWeb Node SDK</a> for blockchain support.
          </li>
          <li>
            <a target="_blank" href="https://react-bootstrap.github.io/">react-bootstrap</a> and <a target="_blank" href="">react-colour</a> NPM packages for better UI.
          </li>
          <li>
            Circlez Coffee Membership smart contract created and deployed to Mumbai using <a target="_blank" href="https://thirdweb.com/thirdweb.eth/TokenERC721">ThirdWeb NFT Collection Contract</a>.
          </li>
        </ul>
      </div>
      <div><h2>Source code</h2>
        <ul>
          <li>
            The Shopify token gating app and extensions can be found <a target="_blank" href="https://github.com/richardrauser/circlez-coffee-shopify">on Github</a>.
          </li>
          <li>
            The Circlez Coffee website and backend can be found <a target="_blank" href="https://replit.com/@RichardRauser/Circlez-Coffee-Website">in Replit</a>.
          </li>
          <li>
            The Circlez Coffee website and backend source can also be found <a target="_blank" href="https://github.com/richardrauser/Circlez-Coffee-Web">in Github</a>.
          </li>
          <li>
            View the README.md files in those repos in order to build something like this yourself!
          </li>
        </ul>
      </div>

    </div>

  )
}

export default About