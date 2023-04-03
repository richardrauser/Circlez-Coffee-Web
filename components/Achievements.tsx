import React, { useState } from 'react';
import Achievement from './Achievement';
import { CC_ACHIEVEMENTS_CONTRACT_ADDRESS, CC_ACHIEVEMENTS_FIRST_PURCHASE_TOKEN_ID, CC_ACHIEVEMENTS_FIVE_PURCHASES_TOKEN_ID, CC_ACHIEVEMENTS_NUMBER_ONE_FAN_TOKEN_ID } from "/utils/constants"
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react"
import Loading from "../components/Loading"

export default function Achievements(props) {

  const address = props.address
  const { contract } = useContract(CC_ACHIEVEMENTS_CONTRACT_ADDRESS)
  const { data, isLoading, error } = useOwnedNFTs(contract, address)

  var firstPurchaseLocked = true;
  var numberOneFanLocked = true;
  var fivePurchasesLocked = true;

  if (data != undefined && data.length != 0) {
    const tokenIds = data.map(item => item.metadata.id);
    console.log("TOKEN IDS: ", tokenIds);
    if (tokenIds.includes(CC_ACHIEVEMENTS_FIRST_PURCHASE_TOKEN_ID)) {
      firstPurchaseLocked = false;
    }
    if (tokenIds.includes(CC_ACHIEVEMENTS_NUMBER_ONE_FAN_TOKEN_ID)) {
      numberOneFanLocked = false;
    }
    if (tokenIds.includes(CC_ACHIEVEMENTS_FIVE_PURCHASES_TOKEN_ID)) {
      fivePurchasesLocked = false;
    }
  }

  var achievements = [
    {
      imageSrc: '/CirclezCoffeeFirstPurchase.png',
      altText: 'Circlez Coffee First Purchase image',
      title: 'Circlez Coffee First Purchase',
      description: 'Make your first purchase and unlock a 15% discount on super cool Circlez Coffee swag!',
      locked: firstPurchaseLocked,
      actionLink: 'https://circlez-coffee.myshopify.com/',
      actionText: 'Browse shop',
      rewardLink: 'https://circlez-coffee.myshopify.com/collections/circlez-coffee-swag',
      rewardText: 'Buy discounted swag'
    },
    {
      imageSrc: '/Circlez-CoffeeNumber1Fan.png',
      altText: 'Circlez Coffee #1 Fan image',
      title: 'Circlez Coffee #1 Fan',
      description: 'Buy the Circlez Coffee T-shirt, hoodie and ballcap & get the track "I luv coffee" by LadyBean & the Circlez.',
      locked: numberOneFanLocked,
      actionLink: 'https://circlez-coffee.myshopify.com/collections/circlez-coffee-swag',
      actionText: 'Browse swag',
      rewardLink: 'https://testnets.opensea.io/assets/mumbai/0xdd1abd8de29d8a0aea01aa9413c4302678a78b87/0',
      rewardText: 'Get the track'
    },  
    {
      imageSrc: '/CirclezCoffeeFivePurchases.png',
      altText: 'Circlez Coffee Five Purchases image',
      title: 'Circlez Coffee Five Purchases',
      description: 'Make 5 purchases to unlock a 20% discount on coffee machines.',
      locked: fivePurchasesLocked,
      actionLink: 'https://circlez-coffee.myshopify.com/',
      actionText: 'Browse shop',
      rewardLink: 'https://circlez-coffee.myshopify.com/collections/coffee-machines',
      rewardText: 'Buy discounted coffee machines'
    }
    ]
  
return (
      <div>
        {data ? (
          <div>
            {achievements.map((achievement, index) => (
              <Achievement
                key={`achievement-${index}`}
                imageSrc={achievement.imageSrc}
                altText={achievement.altText}
                title={achievement.title}
                description={achievement.description}
                locked={achievement.locked} 
                actionLink={achievement.actionLink}
                actionText={achievement.actionText}
                rewardLink={achievement.rewardLink}
                rewardText={achievement.rewardText}
              />
            ))}
          </div>        
          ) : (
          <Loading loadingText="Loading achievements.."/>
          ) 
        }
     </div> 
  )
}
