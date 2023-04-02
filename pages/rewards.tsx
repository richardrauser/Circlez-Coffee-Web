import { NextPage } from "next"
import { useEffect, useState } from "react"
import ClaimMembership from "../components/ClaimMembership"
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react"
import { CC_MEMBERSHIP_CONTRACT_ADDRESS } from "/utils/constants"
import { toast } from "react-toastify"
import Loading from "../components/Loading"
import YourMembership from "../components/YourMembership"
import Achievements from "../components/Achievements"
import styles from "/styles/Rewards.module.css"

const Membership: NextPage = () => {

  const address = useAddress()
  const { contract } = useContract(CC_MEMBERSHIP_CONTRACT_ADDRESS)
  const { data, isLoading, error } = useOwnedNFTs(contract, address)

  console.log("DATA: " + data)

  return (
    <div>
      <h1>Rewards</h1>
      {!isLoading && (!address || data == undefined || data.length == 0) ? (
        <ClaimMembership />

      ) : (
        <div>
          {isLoading ? (
            <Loading loadingText="Checking membership status.." />
          ) : (
            <div>
              <div className={styles.description}>
              Unlock achievement badges to earn amazing rewards from Circlez Coffee!
              </div>
              <Achievements address={address} />
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default Membership