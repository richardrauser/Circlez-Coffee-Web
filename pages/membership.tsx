import { NextPage } from "next"
import { useEffect, useState } from "react"
import ClaimMembership from "../components/ClaimMembership"
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react"
import { CC_MEMBERSHIP_CONTRACT_ADDRESS } from "/utils/constants"
import { toast } from "react-toastify"
import Loading from "../components/Loading"
import YourMembership from "../components/YourMembership"

const Membership: NextPage = () => {

  const address = useAddress()
  const { contract } = useContract(CC_MEMBERSHIP_CONTRACT_ADDRESS)
  const { data, isLoading, error } = useOwnedNFTs(contract, address)

  console.log("DATA: " + data)

  return (
    <div>
      <h1>Membership</h1>
      {!isLoading && !address ? (
        <ClaimMembership />

      ) : (
        <div>
          {isLoading ? (
            <Loading loadingText="Checking membership status.." />
          ) : (
            <div>
              {(data.length > 0) ? (
                <YourMembership tokens={data} />
              ) : (
                <ClaimMembership />
              )}
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default Membership