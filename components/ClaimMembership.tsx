import { Button } from 'react-bootstrap'
import { SketchPicker } from 'react-color'
import Loading from '../components/Loading'
import { generateMembershipSvg } from '../utils/imageGenerator'
import { showErrorMessage } from '../utils/toasts'
import { toast } from "react-toastify"
import { useEffect, useState } from 'react'
import styles from '../styles/ClaimMembership.module.css'

import { useAddress } from "@thirdweb-dev/react";


export default function ClaimMembership() {
  // select random color for initial color
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  const initialColor = '#' + n.slice(0, 6)
  const initialSvg = generateMembershipSvg(initialColor)
  const encodedSvg = encodeURIComponent(initialSvg)

  const [claiming, setClaiming] = useState(false)
  const [selectedColor, setSelectedColor] = useState(initialColor)
  const [svg, setSvg] = useState(initialSvg)
  const [svgDataUri, setSvgDataUri] = useState(`data:image/svg+xml,${encodedSvg}`)

  const currentAddress = useAddress();

  const handleColorPickerChangeComplete = (color) => {
    console.log("COLOR: " + JSON.stringify(color))

    const generatedSvg = generateMembershipSvg(color.hex)
    const encodedSvg = encodeURIComponent(svg)

    setSelectedColor(color.hex)
    setSvg(generatedSvg)
    setSvgDataUri(`data:image/svg+xml,${encodedSvg}`)
  };

  const mintPressed = async (color) => {
    console.log("minting membership with color: " + color)
    setClaiming(true)

    try {

      if (!currentAddress) {
        console.log("not logged in");
        // login();
        toast.info("You're not connected. Hit the Connect Wallet button at top right and try again, my lovely.");
        setClaiming(false);
        return;
      } else {
        console.log("Wallet connect.. address: " + currentAddress);
      }

      var bodyObject = Object()
      bodyObject.color = color
      bodyObject.ownerAddress = currentAddress

      const response = await fetch("/api/membership",
        {
          method: 'POST',
          body: JSON.stringify(bodyObject)
        }
      )

      if (response.status != 200) {
        console.log("RESPONSE STATUS CODE: " + response.status)

        let body = await response.json()

        console.log("Minting error: " + body.error)
        showErrorMessage("A minting error occurred. " + body.error)
        setClaiming(false)

        return;
      }
      setClaiming(false);
    } catch (error) {
      console.log("Minting error: " + error)
      showErrorMessage("A minting error occurred." + error)
      setClaiming(false)
    }
  }

  return (

    <div>
      {claiming ? (
        <div className="loadingPanel">
          <Loading loadingText="Claiming.. this can take a while. Please be patient 😁" />
        </div>
      ) : (
        <div>
          <p>
            Claim your membership now for a limited time! Personalise it by picking your favourite colour.
          </p>
          <div className={styles.row}>
            <div className={styles.twoColumn}>
              <SketchPicker color={selectedColor} onChangeComplete={handleColorPickerChangeComplete} />
            </div>
            <div className={styles.twoColumn}>
              <img width="308px" height="308px" src={svgDataUri} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.oneColumn}>
              <Button className={styles.claimButton} onClick={() => mintPressed(selectedColor)} > Claim Membership!</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}