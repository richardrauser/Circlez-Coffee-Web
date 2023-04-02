import TokenCard from "./TokenCard"
import { Card } from "react-bootstrap"
import { ThirdwebNftMedia } from "@thirdweb-dev/react"
import { Button } from 'react-bootstrap'
import { CC_MEMBERSHIP_CONTRACT_ADDRESS } from "/utils/constants"
import styles from '/styles/YourMembership.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function YourMembership(props) {
  // There should really only be one membership NFT! This is something you should guard against at both the
  // front-end and smart contract level in a production implementation.
  const firstToken = props.tokens[0];
  console.log("First token: " + JSON.stringify(firstToken));

  const nft = firstToken;
  const tokenId = nft.metadata.id;
  const openSeaLink = "https://testnets.opensea.io/assets/mumbai/" + CC_MEMBERSHIP_CONTRACT_ADDRESS + "/" + tokenId;


  return (
    <div>
      <p>
        Congrats, you're a Circlez Coffee member!
      </p>

      <Card className={styles.membership}>
        <Card.Title>
          Your membership pass
        </Card.Title>
        <Card.Body>
          <ThirdwebNftMedia metadata={nft.metadata} />
          <div className={styles.info}>
            Your membership ID: {firstToken.metadata.id}<br />
            You're entitled to a 10% off on coffee!
          </div>
        </Card.Body>
        <Button target="_blank" className={styles.action} href="https://circlez-coffee.myshopify.com/">Shop now</Button>
        <Button target="_blank" className={styles.action} href={openSeaLink}>View on OpenSea</Button>

      </Card>
    </div>
  )
}