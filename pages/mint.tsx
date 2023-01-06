import { useAddress, useMetamask, useNFTDrop, useContract } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css"


import { Web3Button } from "@thirdweb-dev/react";

const Mint: NextPage = () => {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
         <b>NFT Drop</b> contract
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress="0xFeF73CcFB94D033ff1A663B40431941834694e04"
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push(`/stake`);
        }}
        onError={(error) => {
          console.error(error);
          alert(error);
        }}
      >
        Claim An NFT
      </Web3Button>
    </div>
  );
	




  /*
  // Get the currently connected wallet's address
	  const address = useAddress();

	// Function to connect to the user's Metamask wallet
	const connectWithMetamask = useMetamask();

	// Get the NFT Collection contract
	const nftDropContract = useContract("0xFeF73CcFB94D033ff1A663B40431941834694e04", "nft-drop").contract;
	async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.container}>
			<div className="imageDRap">
									<img className="dropImg" src={`NFTDROP.png`} alt="drop" />
								</div>
			{!address ? (
        <button className={`${styles.mainButton} ${styles.spacerBottom}`}
					onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
				
          <button
					className="btn"
					onClick={() => claimNft()}>
            Claim An NFT
          </button>
      )}
    </div>
  );
  */
  
};

export default Mint;
