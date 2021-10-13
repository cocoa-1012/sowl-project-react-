import React, { useState } from 'react';
import Nav from '../Component/Nav';
import './Utility.scoped.css';

const UtilityInput = ({ placeholder, name, setData, inputValue }) => {
	return (
		<div className='mb-xl-5 position-relative mt-3'>
			<img src={require('../images/utility-input.png').default} alt='' className='img-fluid' />
			<input
				name={name}
				placeholder={placeholder}
				type='text'
				autoComplete='off'
				value={inputValue}
				onChange={(e) => setData(e.target.value)}
				className='form-control ps-5 input-styles border-0 rounded-pill position-absolute form-control-lg '
			/>
		</div>
	);
};

const RewardsInput = ({ name }) => {
	return (
		<div className='mb-xl-5 position-relative mt-3'>
			<img src={require('../images/rewards-input.png').default} alt='' className='img-fluid' />
			<input
				name={name}
				type='text'
				autoComplete='off'
				className='form-control ps-5 input-styles border-0 rounded-pill position-absolute form-control-lg '
			/>
		</div>
	);
};

const Utility = () => {
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [walletIdValue, setWalletIdValue] = useState('');

	return (
		<section className='bg-purple position-relative h-100'>
			<Nav />
			<div className='position-fixed'>
				<figure className='TECH_LINES'>
					<img src={require('../images/TECH_LINES.png').default} alt='' className='img-fluid' />
				</figure>
			</div>
			<div className='container-fluid pt-5 position-relative top-0 d-flex flex-column justify-content-start h-100'>
				<div className='row position-relative mb-5'>
					<section>
						<div className='co-xl-12 justify-content-center d-flex'>
							<div>
								<p className='large-title'>
									<span className='gradient-text-outline'>Utility & rewards</span>
								</p>
							</div>
						</div>
					</section>
				</div>
				<div className='utility-form-1 mt-0'>
					<div className='row'>
						<div className='col-12 position-relative pt-xl-5 pt-md-5'>
							<div className='vot_title_1 mt-5 mx-5'>
								<p className='utility-section-heading utility'>Utility</p>
							</div>
						</div>
					</div>
					<div className='row form-inputs d-flex justify-content-center'>
						<div className='col-xl-8 col-md-8 col-10'>
							<form>
								<p className='utility-section-subtitle'>
									To Sign-Up for First Student Advantage #1 (Early Access for Levels), Please Fill
									Out The Following:
								</p>
								<UtilityInput
									name='name'
									placeholder='Name'
									setData={setNameValue}
									inputValue={nameValue}
								/>
								<UtilityInput
									name='email'
									placeholder='Email'
									setData={setEmailValue}
									inputValue={emailValue}
								/>
								<UtilityInput
									name='walletId'
									placeholder='Wallet ID'
									setData={setWalletIdValue}
									inputValue={walletIdValue}
								/>
								<div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
									<button
										type='button'
										className='large-gradient-button'
										onClick={() => {
											window.location = `mailto:info@sowltoken.com?subject=Utility&body=Name:%20${nameValue}%20%20Email:%20${emailValue}%20%20Wallet%20ID:%20${walletIdValue}`;
											// console.log('Tested value', nameValue, emailValue, walletIdValue);
											setWalletIdValue('');
											setNameValue('');
											setEmailValue('');
										}}>
										<span>Submit</span>
									</button>
								</div>
							</form>

							<form>
								<p className='utility-section-subtitle'>
									To Sign-Up for First Student Advantage #2 (Early Access for Video Tutoring),
									Please Fill Out the Following:
								</p>
								<UtilityInput name='name' placeholder='Name' />
								<UtilityInput name='email' placeholder='Email' />
								<UtilityInput name='wallet_id' placeholder='Wallet ID' />
								<div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
									<button type='button' className='large-gradient-button'>
										<span>Submit</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className='utility-form-2 mb-5'>
					<div className='row'>
						<div className='col-12 position-relative pt-xl-5 pt-md-5'>
							<p className='utility-section-heading rewards'>Rewards</p>
						</div>
					</div>
					<div className='row form-inputs d-flex justify-content-center'>
						<div className='col-xl-8 col-md-8 col-10'>
							<form>
								<p className='rewards-section-label white'>Date of airdrop #1:</p>
								<RewardsInput name='date' />
								<p className='rewards-section-label'>Amount of tokens to be dropped:</p>
								<RewardsInput name='amount_dropped' />
								<p className='rewards-section-label'>Amount awarded:</p>
								<RewardsInput name='amount_awarded' />
								<p className='rewards-section-label'>Amount of participants:</p>
								<RewardsInput name='amount_participants' />
								{/* <div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
									<button type='button' className='large-gradient-button'>
										<span>Submit</span>
									</button>
								</div> */}
								{/* </form>

							<form> */}
								<p className='rewards-section-label white mt-5 pt-5'>Date of airdrop #2:</p>
								<RewardsInput name='date' />
								<p className='rewards-section-label'>Amount of tokens to be dropped:</p>
								<RewardsInput name='amount_dropped' />
								<p className='rewards-section-label'>Amount awarded:</p>
								<RewardsInput name='amount_awarded' />
								<p className='rewards-section-label'>Amount of participants:</p>
								<RewardsInput name='amount_participants' />
								{/* <div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
									<button type='button' className='large-gradient-button'>
										<span>Submit</span>
									</button>
								</div> */}
								{/* </form>

							<form> */}
								<p className='rewards-section-label white mt-5 pt-5'>Date of airdrop #3:</p>
								<RewardsInput name='date' />
								<p className='rewards-section-label'>Amount of tokens to be dropped:</p>
								<RewardsInput name='amount_dropped' />
								<p className='rewards-section-label'>Amount awarded:</p>
								<RewardsInput name='amount_awarded' />
								<p className='rewards-section-label'>Amount of participants:</p>
								<RewardsInput name='amount_participants' />
								{/* <div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
									<button type='button' className='large-gradient-button'>
										<span>Submit</span>
									</button>
								</div> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Utility;
