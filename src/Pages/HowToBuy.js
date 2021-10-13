import React from 'react';
import Nav from '../Component/Nav';
import './HowToBuy.scoped.css';

const HowToBuy = () => {
	const copyAddress = () => {
		document.getElementById('address-field').select();
		document.execCommand('copy');
	};

	return (
		<>
			<Nav />
			<section className='How_to_Buy position-relative d-flex mt-5'>
				<div className='position-fixed'>
					<figure className='TECH_LINES'>
						<img
							src={require('../images/BACKGROUND_Bay.png').default}
							alt=''
							className='img-fluid'
						/>
					</figure>
				</div>
				<div className='container-fluid g-0 pt-2 position-absolute top-0 d-flex flex-column justify-content-start h-100 mt-5'>
					<div className='row position-relative mb-5 g-0'>
						<section>
							<div className='col-xl-12 col-12'>
								<div>
									<img
										src={require('../images/top_image_logo.png').default}
										style={{ marginTop: '2rem' }}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>
						</section>
					</div>
					<section className='container-box how-to p-md-2 m-4'>
						<div className='container-fluid pt-5 top-0 d-flex flex-column justify-content-start h-100'>
							<div className='row'>
								<div className='col-12 mt-2'>
									<div className='w-100 d-flex justify-content-center'>
										<div className='w-50'>
											<p className='read-before-purchasing'>
												<span>READ THE RISKS & DISCLOSURES BELOW BEFORE PURCHASING</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<div className='d-flex justify-content-center mt-5'>
										<div className='w-75'>
											<p>
												<a
													className='legal-disclaimer-box'
													data-bs-toggle='collapse'
													href='#collapseExample'
													role='button'
													aria-expanded='false'
													aria-controls='collapseExample'>
													<span>important notice</span>
													<img src={require('../images/plus-button.png').default} alt='' />
												</a>
											</p>
											<div className='collapse' id='collapseExample'>
												<div className='card card-body bg-pink m-xl-5 m-md-5 m-2 pb-5'>
													<p className='card-title-card'>IMPORTANT NOTICE:</p>
													<p className='card-text-body p-2'>
														NOTHING IN OUR WHITE PAPER OR ON THIS WEBSITE CONSTITUTES LEGAL,
														FINANCIAL, BUSINESS OR TAX ADVICE AND YOU SHOULD CONSULT YOUR OWN LEGAL,
														FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISER BEFORE ENGAGING IN ANY
														ACTIVITY IN CONNECTION HEREWITH. NEITHER WRALLETT TECHNOLOGIES (THE
														COMPANY), ANY OF THE PROJECT TEAM MEMBERS WHO HAVE WORKED ON THE SOWL
														TOKEN PLATFORM (AS DEFINED HEREIN) OR PROJECT TO DEVELOP THE SOWL TOKEN
														PLATFORM IN ANY WAY WHATSOEVER (THE SOWL TOKEN TEAM) NOR ANY SERVICE
														PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR INDIRECT DAMAGE OR
														LOSS WHATSOEVER WHICH YOU MAY SUFFER IN CONNECTION WITH ACCESSING THIS
														WHITE PAPER, THE WEBSITE AT HTTP://WWW.YOURCLASS.ORG, OR ANY OTHER
														WEBSITES OR MATERIALS PUBLISHED BY THE COMPANY.
													</p>

													<p className='card-text-body p-2'>
														This website and our white paper are intended for general informational
														purposes only and do not constitute a prospectus, an offer document, an
														offer of securities, a solicitation for investment, or any offer to sell
														any product, item or asset (whether digital or otherwise). The
														information herein below may not be exhaustive and does not imply any
														elements of a contractual relationship. There is no assurance as to the
														accuracy or completeness of such information and no representation,
														warranty or undertaking is or purported to be provided as to the
														accuracy or completeness of such information. Where this white paper
														includes information that has been obtained from third party sources,
														the Company and/or the SOWL Token team have not independently verified
														the accuracy or completion of such information. Further, you acknowledge
														that circumstances may change, and that this white paper may become
														outdated as a result; and the Company is under no obligation to update
														or correct this document in connection therewith.
													</p>

													<p className='card-text-body p-2'>
														This website and our white paper do not constitute any offer by the
														Company or the SOWL Token team to sell any SOWL Tokens (as defined
														herein) nor shall it or any part of it nor the fact of its presentation
														form the basis of, or be relied upon in connection with, any contract or
														investment decision. Nothing contained in this white paper is or may be
														relied upon as a promise, representation or undertaking as to the future
														performance of the SOWL Token Platform. The agreement between the
														Company (or its affiliate) and you, in relation to any sale and purchase
														of SOWL Token is to be governed by only the separate terms and
														conditions of such agreement.
													</p>

													<p className='card-text-body p-2'>
														By accessing this website and white paper or any part thereof, you
														represent and warrant to the Company, its affiliates and the SOWL Token
														team as follows:
													</p>

													<p className='card-text-body p-2'>
														(a) you acknowledge, understand and agree that SOWL Tokens may have no
														value, there is no guarantee or representation of value or liquidity for
														SOWL Tokens, and the SOWL Token is not for speculative investment;
													</p>

													<p className='card-text-body p-2'>
														(b) none of the Company, its affiliates, and/or the SOWL Token team
														members shall be responsible for or liable for the value of SOWL Token,
														the transferability and/or liquidity of the SOWL Token and/or the
														availability of any market for SOWL Tokens through third parties or
														otherwise;
													</p>

													<p className='card-text-body p-2'>
														(c) in any decision to purchase any SOWL Tokens, you have not relied on
														any statement set out one this website or white paper;
													</p>
													<p className='card-text-body p-2'>
														(d) you will and shall at your own expense ensure compliance with all
														laws, regulatory requirements and restrictions applicable to you (as the
														case may be); and
													</p>
													<p className='card-text-body p-2'>
														(e) you acknowledge, understand and agree that you are not eligible to
														purchase any SOWL Tokens if you are a citizen, national, resident (tax
														or otherwise), domiciliary and/or green card holder of a geographic area
														or country (i) where it is likely that the sale of SOWL Tokens would be
														construed as the sale of a security (howsoever named) or investment
														product and/or (ii) in which access to or participation in the SOWL
														Token sale or the SOWL Token Platform is prohibited by applicable law,
														decree, regulation, treaty, or administrative act, and/or (including
														without limitation the United States of America, Canada, New Zealand,
														People's Republic of China and the Republic of Korea).
													</p>
													<p className='card-text-body p-2'>
														The Company and the SOWL Token team do not and do not purport to make,
														and hereby disclaims, all representations, warranties or undertaking to
														any entity or person (including without limitation warranties as to the
														accuracy, completeness, timeliness or reliability of the contents of
														this white paper or any other materials published by the Company). To
														the maximum extent permitted by law, the Company, its related entities
														and service providers shall not be liable for any liability (including,
														without limitation, any liability arising from default or negligence on
														the part of any of them) for any loss whatsoever arising from the use of
														this white paper or any other materials published, or its contents or
														otherwise arising in connection with the same. Prospective purchasers of
														SOWL Tokens should carefully consider and evaluate all risks and
														uncertainties (including financial and legal risks and uncertainties)
														associated with the SOWL Token sale, the Company and the SOWL team.
													</p>
													<p className='card-text-body p-2'>
														All contributions will be applied towards the Company's objects,
														including without limitation promoting the research, design and
														development of, and advocacy for the development of blockchain
														technology to create a global decentralized education platform focused
														on facilitating the utilization and provision of educational resources,
														the enhancement of gamification systems, the use of incentivized
														learning, and the use of patent-pending technology in the forms of
														artificial intelligence, augmented reality, and video tutoring services
														for children around the world in a variety of age ranges.
													</p>
													<p className='card-text-body p-2'>
														The information set out on this website and white paper is for community
														discussion only and is not legally binding. The agreement for sale and
														purchase of the SOWL Token and/or continued holding of SOWL Tokens shall
														be governed by a separate set of Terms and Conditions or Token Purchase
														Agreement (as the case may be) setting out the terms of such purchase
														and/or continued holding of the SOWL Token (the Terms and Conditions),
														which shall be separately provided to you or made available at
														http://www.yourclass.org. In the event of any inconsistencies between
														the Terms and Conditions and this white paper, the Terms and Conditions
														shall prevail.
													</p>
													<p className='card-text-body p-2'>
														No regulatory authority has examined or approved of any of the
														information set out in this white paper. No such action has been or will
														be taken under the laws, regulatory requirements or rules of any
														jurisdiction. The publication, distribution or dissemination of this
														white paper does not imply that the applicable laws, regulatory
														requirements or rules have been complied with.
													</p>
													<p className='card-text-body p-2'>
														All statements contained on this website and white paper, statements
														made in press releases or in any place accessible by the public and oral
														statements that may be made by the Company and/or the SOWL Token team
														may constitute forward-looking statements (including statements
														regarding intent, belief or current expectations with respect to market
														conditions, business strategy and plans, financial condition, specific
														provisions and risk management practices). You are cautioned not to
														place undue reliance on these forward-looking statements given that
														these statements involve known and unknown risks, uncertainties and
														other factors that may cause the actual future results to be materially
														different from that described by such forward-looking statements, and no
														independent third party has reviewed the reasonableness of any such
														statements or assumptions. These forward-looking statements are
														applicable only as of the date of this white paper and the Company and
														the SOWL Token team expressly disclaims any responsibility (whether
														express or implied) to release any revisions to these forward-looking
														statements to reflect events after such date.
													</p>
													<p className='card-text-body p-2'>
														This website and/or white paper may be translated into a language other
														than English and in the event of conflict or ambiguity between the
														English language version and translated versions of this white paper,
														the English language version shall prevail. You acknowledge that you
														have read and understood the English language version of this white
														paper.
													</p>
													<p className='card-text-body p-2'>
														No part of this website or white paper is to be copied, reproduced,
														distributed or disseminated in any way without the prior written consent
														of the Company.
													</p>
													<p className='card-text-body p-2'>
														*Please note: We ask that you thoroughly review the risks and
														disclaimers section next so that you can properly ascertain if this
														utility token is something that you believe can help your life in any
														way. Our intention is to provide all of the details necessary so that
														you can make an informed decision. We are very aware that this white
														paper is longer than 99% of the current white papers in the market, even
														Cardano's white paper. Cardano is an icon in the cryptocurrency
														industry. The principles behind this token have significant investments
														in the Cardano coin. For the record, we would have made this token on
														the Cardano network if Cardano's token creation system would have
														allowed for more flexibility to create the coin so that the features we
														created could be implemented. Given that this was not possible at the
														current time, we elected to create a BEP-20 token, which we believe is
														the second-best alternative.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='row flex-grow-1'>
								<div className='col-12'>
									<div className='d-flex justify-content-center'>
										<div className='w-75'>
											<p>
												<a
													className='legal-disclaimer-box'
													data-bs-toggle='collapse'
													href='#collapseExample_2'
													role='button'
													aria-expanded='false'
													aria-controls='collapseExample'>
													<span>statement</span>
													<img src={require('../images/plus-button.png').default} alt='' />
												</a>
											</p>
											<div className='collapse' id='collapseExample_2'>
												<div className='card card-body bg-pink m-xl-5 m-md-5 m-2 pb-5'>
													<p className='card-title-card'>STATEMENT:</p>
													<p className='card-text-body p-2'>
														The SOWL Token is designed to be a blockchain-based decentralized
														cryptocurrency token powered by the growth of the mobile application
														EarlyBird, which is a global virtual education platform that is powered
														by videos, gamification, incentivized learning, and SpecTech in the
														forms of Artificial Intelligence, Augmented Reality, and Video Tutoring
														on the Binance Blockchain. On this mobile application EarlyBird, users
														can access a wide array of educational content designed for children
														ages 1-8 and tailored for children all over the world with different
														cultures and learning abilities.
													</p>
													<p className='card-text-body p-2'>
														The Official Website of our project:{' '}
														<a href='https://www.yourclass.org' target='_blank' rel='noreferrer'>
															{' '}
															www.yourclass.org
														</a>
													</p>
													<p className='card-text-body p-2'>
														The Official Website to learn more about the SOWL Token is:{' '}
														<a
															href='https://www.yourclass.org/ico'
															target='_blank'
															rel='noreferrer'>
															www.yourclass.org/ico
														</a>
													</p>
													<p className='card-text-body p-2'>
														Our Smart Contract Address Is:{' '}
														<a
															href='https://bscscan.com/address/0xd96b3B739b708210359539523c371141f173b894'
															target='_blank'
															rel='noreferrer'>
															0xd96b3B739b708210359539523c371141f173b894
														</a>
													</p>
													<p className='card-text-body p-2'>
														We remind users that if they choose to carry out the token operation
														including the purchase and recharge of SOWL Tokens, be sure to carry out
														on regular Exchanges to avoid any confusion or misleading information
														that can affect your investment negatively, by inquiring on our
														intelligent contracts address. Any kinds of situations, such as loss of
														tokens caused by a duplicate name, untrustworthy platforms including not
														limited to the Exchange to buy or recharge the SOWL Token, which is not
														from our SOWL Token project, are the responsibility of the investor as
														the consequences have nothing to do with our particular and authentic
														Exchange.
													</p>
													<p className='card-text-body p-2'>
														Declarant: The SOWL Token with EarlyBird Digital Inc. & Wrallett
														Technologies.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className='container-box how-to p-md-2 m-4'>
						<div className='row g-0 px-xl-0 px-md-2 px-4'>
							<div className='col-12'>
								<div className='title_and_BUY_parapha mt-5 mt-xl-5 mt-md-5 '>
									<h3 className='BUY-title'>HOW TO BUY SOWL:</h3>
									<p className='BUY_paraph mb-0'>
										A STEP-BY-STEP GUIDE ON HOW TO BUY SOWL ON THE EXCHANGE, PANCAKESWAP:
									</p>
								</div>
							</div>
							<div className='col-12'>
								<div className='row'>
									<div className='col-6 how-to-button'>
										<a href='http://presale.sowltoken.com/' target='_blink'>
											<button className='pill-button'>
												<span>PRESALE</span>
											</button>
										</a>
										<a
											href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd96b3B739b708210359539523c371141f173b894'
											target='_blink'>
											<button className='pill-button'>
												<span>Buy on pancakeswap</span>
											</button>
										</a>
									</div>
								</div>
								<br />
								<br />
							</div>
						</div>
					</section>
					<section className='container-box how-to p-md-2 m-4'>
						<div className='row g-0 px-xl-0 px-md-2 px-4'>
							<div className='col-12'>
								<div className='title_and_BUY_parapha mt-2 mt-xl-3 mt-md-3 p-3 pb-5 text-center'>
									<a href='https://youtu.be/H_iciH19fb8' target='_blink'>
										<button className='pill-button'>
											<span>Video guide</span>
										</button>
									</a>
									<p className='BUY_paraph mb-0 mt-2'>
										VIDEO GUIDE FOR PURCHASE SOWL TOKENS ON THE PANCAKESWAP EXCHANGE.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className='container'>
						<div className='row position-relative g-0'>
							<div className='offset-1 col-10 align-self-center'>
								<div className='title_and_BUY_parapha mt-4 mt-md-3 p-3 pb-5'>
									<p className='Recommended mb-0'>
										DIRECTIONS FOR DOWNLOADING THE TRUST WALLET APP AND PUCHASING SOWL TOKENS.{' '}
										<br />
										TIME FRAME: APPROXIMATELY 20-30 MINUTES
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className='container'>
						<div className='row position-relative g-0 px-xl-0 px-md-2 px-4'>
							<div className='col-xl-6 col-md-8 col-12 mx-auto'>
								<p className='howto-step'>
									<span>Step 1: Create wallet</span>
								</p>
							</div>
							<div className='col-12 align-self-center'>
								<div className='container-box step-contents p-md-5 p-1'>
									<p>
										Download Trust Wallet and create a wallet. Keep your phrase a secret! Never
										share it with
										<br /> anyone and store it properly! &nbsp; &nbsp;
										<span>MAKE SURE TO COPY THE CONTRACT ADDRESS FOR THE SOWL TOKEN BELOW:</span>
									</p>
								</div>
							</div>
							<div className='col-8 align-self-center m-auto mt-2'>
								<div className='FORM_STEP_CREATE'>
									<div className='position-relative'>
										<span className='address text-white text-uppercase fw-bold position-absolute px-3'>
											address
										</span>
										<input
											className='input_copy p-2 form-control form-control-lg rounded-pill'
											style={{ marginTop: '2rem' }}
											type='text'
											readOnly
											value='0xd96b3B739b708210359539523c371141f173b894'
											id='address-field'
										/>
										<button
											onClick={copyAddress}
											className='ptn-copy text-white text-uppercase fw-bold p-2 pe-3 border-0 position-absolute'>
											<img
												src={require('../images/COPY_ICON.png').default}
												alt=''
												className='img-fluid px-1 copy-icon'
											/>
											copy
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='container position-relative g-0 px-xl-0 px-md-2 px-4'>
						<div className='row'>
							<div className='col-xl-6 col-md-8 col-12 mx-auto mt-4'>
								<p className='howto-step' style={{ marginTop: '2rem' }}>
									<span>Step 2: Add SOWL to your wallet</span>
								</p>
							</div>
							<div className='col-12 align-self-center'>
								<div className='container-box step-contents p-md-5 p-1'>
									<p>
										TAP THE ICON IN THE TOP-RIGHT AND SEARCH FOR “SOWL”. IF IT'S NOT THERE, TAP "ADD
										CUSTOM TOKEN". AT THE TOP, TAP "ETHEREUM" NEXT TO NETWORK, AND CHANGE IT TO
										"SMART CHAIN". COPY THE CONTRACT ADDRESS ON THIS PAGE AND PUT IT IN THE CONTRACT
										ADDRESS BOX. NEXT, PUT “SOWL” AS THE NAME, AND THE SYMBOL AS SOWL. CLICK "DONE"
										AT THE TOP AND YOU SHOULD NOW HAVE THE SOWL TOKEN ADDED TO YOUR WALLET!
									</p>
								</div>
							</div>
							<div className='col-xl-4 col-md-6 col-sm-8 mx-auto mt-4'>
								<div>
									<img
										src={require('../images/ADD_CUSTOM_TOKEN.png').default}
										alt=''
										className='img-fluid'
										style={{ marginTop: '0rem' }}
									/>
								</div>
							</div>
						</div>
					</section>

					<section className='container position-relative g-0 px-xl-0 px-md-2 px-4'>
						<div className='row'>
							<div className='col-xl-6 col-md-8 col-12 mx-auto mt-4'>
								<p className='howto-step'>
									<span>Step 3: Buy "Binance smart chain" (BNB)</span>
								</p>
							</div>
							<div className='col-12 align-self-center'>
								<div className='container-box step-contents p-md-5 p-1'>
									<p>
										Tap on "Smart Chain" on the main screen of trust wallet, then tap "Buy" in the
										top right. This step may require KYC verification, so have documents ready to
										prove your identity.
										<br />
										<span>
											If the transaction won't go through, you may need to contact your bank to
											allow international transactions.
										</span>
										<br />
										After purchasing, there may be a delay while your transaction is processed. Be
										patient, this is normal!
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className='container position-relative g-0 flex-grow-1 px-xl-0 px-md-2 px-4'>
						<div className='row'>
							<div className='col-xl-6 col-md-8 col-12 mx-auto mt-4'>
								<p className='howto-step' style={{ marginTop: '2rem' }}>
									<span>Step 4: Swap BNB for SOWL!</span>
								</p>
							</div>
							<div className='col-12 align-self-center'>
								<div className='container-box step-contents p-md-5 p-1'>
									<p>
										ONCE YOUR TRANSACTION HAS BEEN CLEARED, AND YOU HAVE BNB ON YOUR TRUST WALLET,
										GO TO DAPPS (OR "BROWSER" FOR IPHONES) AT THE BOTTOM OF THE MAIN SCREEN. IF THE
										BROWSER BUTTON IS NOT VISIBLE AT THE BOTTOM FOR IPHONE, OPEN SAFARI AND IN THE
										URL TYPE TRUST://BROWSER_ENABLE, THEN RETURN TO TRUST WALLET.
										<br />
										<br />
										OPEN THE DAPPS, OR BROWSER, SECTION AND FIND PANCAKESWAP AND OPEN IT. CONNECT
										YOUR TRUST WALLET IN THE TOP-RIGHT. SCROLL DOWN A LITTLE TO THE "EXCHANGE" BOX.
										<br />
										<br />
										Click the icon <i className='fas fa-bars' /> AND SET THE SLIPPAGE TO 12%. IF YOU
										WANT TO GIVE IT THE BEST POSSIBLE CHANCE TO CLEAR, INCREASE THE DEADLINE. BY
										DEFAULT IT SHOULD BE SET TO 20 MINUTES, WHICH IS FINE.
									</p>
								</div>
							</div>
							<div className='col-xl-4 col-md-6 col-sm-8 mx-auto mt-4'>
								<div>
									<img
										src={require('../images/SLIPAGE_TOLER_NCE.png').default}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>

							<div className='col-12 align-self-center'>
								<div
									className='container-box step-contents p-md-5 p-1'
									style={{ marginTop: '2rem' }}>
									<p>
										Once the slippage is set, and you have the BNB amount set that you wish to swap
										for SOWL as shown, just click Swap and wait patiently for the transaction to
										clear. This process may not be instant and can take anywhere from a few minutes
										up to an hour sometimes, depending on traffic.
										<br />
										<br />
										Once the transaction has been cleared, you should have SOWL in your Trust
										Wallet!
										<br />
										<br />
										NOW ALL THAT’S LEFT IS TO BE REWARDED FOR HOLDING!
									</p>
								</div>
							</div>
							<div className='col-xl-4 col-md-6 col-sm-8 mx-auto mt-4'>
								<div>
									<img
										src={require('../images/EXCHANGE.png').default}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>
						</div>
					</section>
					<footer className='position-relative g-0 px-xl-0 px-md-2 px-0'>
						<div>
							<div className='col-12 align-self-center'>
								<div className='SOWL_PROTOCOL_BG p-md-5 p-1'>
									<div className='col-xl-4 col-md-6 col-sm-8 mx-auto mt-4 sowl-protocol-text'>
										<span className=''>SOWL Token</span>
									</div>
									<p>The Ultimate DeFi™ Token</p>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</section>
		</>
	);
};

export default HowToBuy;
