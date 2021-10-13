import React from 'react';
import Nav from '../Component/Nav';
import './VotingPage.scoped.css';

const box1Candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3', 'Candidate 4', 'Candidate 5'];
const box2Candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3', 'Candidate 4', 'Candidate 5'];
const box3Candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3', 'Candidate 4', 'Candidate 5'];

const CandidateField = ({ candidateName }) => {
	return (
		<div className='mb-xl-5 position-relative mt-3'>
			<img src={require('../images/inpt__1.png').default} alt='' className='img-fluid' />
			<input
				readOnly
				value={candidateName}
				type='text'
				className='form-control input-styles border-0 rounded-pill position-absolute form-control-lg '
			/>
		</div>
	);
};

const VotingPage = () => {
	const onVote = () =>
		alert('Currently, we have no open votes. Check back in 30 days. Thank you, #TeamSOWL');

	return (
		<section className='BG-AUDIT position-relative h-100'>
			<Nav />
			<div className='position-fixed'>
				<figure className='TECH_LINES'>
					<img
						src={require('../images/BACKGROUND_votes.png').default}
						alt=''
						className='img-fluid'
					/>
				</figure>
			</div>
			<div className='container-fluid pt-5 position-relative top-0 d-flex flex-column justify-content-start h-100'>
				<div className='row position-relative mb-5'>
					<section>
						<div className='co-xl-12 justify-content-center d-flex mb-5'>
							<div>
								<p className='large-title'>
									<span className='gradient-text-outline'>Vote!</span>
								</p>
							</div>
						</div>
					</section>
				</div>
				<div className='voting-form-1 mt-5'>
					<div className='row'>
						<div className='col-12 position-relative pt-xl-5 pt-md-5'>
							<div className='icon-vote_1 position-absolute top-0 start-50 translate-middle_1'>
								<img
									src={require('../images/VOTE_Icon_BG_1.png').default}
									alt=''
									className='img-fluid'
								/>
							</div>
							<div className='vot_title_1 mt-5 mx-5'>
								<p className='vote-section-heading'>
									<span className='gradient-text-outline'>Company board of directors</span>
								</p>
							</div>
						</div>
					</div>
					<div className='row form-inputs d-flex justify-content-center pt-xl-5 pt-md-5'>
						<div className='col-xl-8 col-md-8 col-10'>
							<div className='d-flex justify-content-center'>
								<form className='w-100'>
									{box1Candidates.map((candidateName) => (
										<CandidateField candidateName={candidateName} />
									))}
									<div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
										<button type='button' onClick={onVote} className='large-gradient-button'>
											<span>Vote!</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='voting-form-2 '>
					<div className='row'>
						<div className='col-12 position-relative pt-xl-5 pt-md-5'>
							<div className='icon-vote_1 position-absolute top-0 start-50 translate-middle_1'>
								<img
									src={require('../images/VOTE_Icon_BG_1.png').default}
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='vote-section-heading'>
								<span className='gradient-text-outline'>COMMUNITY BOARD OF DIRECTORS</span>
							</p>
						</div>
					</div>
					<div className='row form-inputs d-flex justify-content-center pt-xl-5 pt-md-5'>
						<div className='col-xl-8 col-md-8 col-10'>
							<div className='d-flex justify-content-center'>
								<form className='w-100'>
									{box2Candidates.map((candidateName) => (
										<CandidateField candidateName={candidateName} />
									))}
									<div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
										<button type='button' onClick={onVote} className='large-gradient-button'>
											<span>Vote!</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='voting-form-3'>
					<div className='row'>
						<div className='col-12 position-relative pt-xl-5 pt-md-5'>
							<div className='icon-vote_1 position-absolute top-0 start-50 translate-middle_1'>
								<img
									src={require('../images/VOTE_Icon_BG_1.png').default}
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='vote-section-heading'>
								<span className='gradient-text-outline'>MINORITY-LED MARKETING COMPANY</span>
							</p>
						</div>
					</div>
					<div className='row form-inputs d-flex justify-content-center pt-xl-5 pt-md-5'>
						<div className='col-xl-8 col-md-8 col-10'>
							<div className='d-flex justify-content-center'>
								<form className='w-100'>
									{box3Candidates.map((candidateName) => (
										<CandidateField candidateName={candidateName} />
									))}
									<div className='w-100 d-flex justify-content-center mt-xl-5 mt-md-5 mt-1'>
										<button type='button' onClick={onVote} className='large-gradient-button'>
											<span>Vote!</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VotingPage;
