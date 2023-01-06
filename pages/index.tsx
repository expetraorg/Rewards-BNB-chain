import { useRouter } from "next/router";
import image from "img.png"

const Home = () => {
  const router = useRouter();

  return (
    <div>
			<link href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap" rel="stylesheet"></link>
			<div className="mainPage">
					<div className="container">
						<div className="main_mainPage">
							<div className="content">
								
								<h1 className="h1"><span>Exeptra</span> NFT-staking Dapp in Polygon testnet</h1>
								<div className="imageDROP">
									<img className="dropImg" src={`NFTDROP.png`} alt="drop" />
								</div>
								<div className="buttons">
									<div className="mintBtn">
										
											<h2>Mint NFT-pass</h2>
											<p className="parText">
												Get NFT-pass and <br></br> start earning rewards.
											</p>
											<button className="btn">
													<div onClick={() => router.push(`/mint`)}>
														Mint NFT
													</div>
											</button>
										
									</div>
									<div className="stakeBtn">

										<h2>Stake NFT-pass</h2>
										<p className="parText">
											Stake your NFTs to get <b>$EXP</b> token rewards{" "}
											
										</p>
										<button className="btn">
											<div onClick={() => router.push(`/stake`)}>
													Stake Your NFTs
												</div>
										</button>
										
									</div>
								</div>
							</div>
							<div className="imagePrikol">
								<img className = "rightImage" src="img.png" alt="" />
							</div>
						</div>
					</div>
				</div>
    </div>
  );
};

export default Home;
