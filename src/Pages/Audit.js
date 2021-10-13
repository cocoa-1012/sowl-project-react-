import React from 'react';
import Nav from '../Component/Nav'

const Audit = () => {
	return (
		<>
		<Nav />
			<section className='BG-AUDIT position-relative d-flex' style={{marginTop:"65px"}}>
				<div className='position-fixed'>
					<figure className='TECH_LINES'>
						<img
							src={require('../images/Gradient_Fill_1.png').default}
							alt=''
							className='img-fluid'
						/>
					</figure>
				</div>
				<div className='container-fluid pt-5 position-absolute top-0 d-flex flex-column justify-content-start h-100'>
					<div className='row position-relative mb-5'>
						<section>
							<div className='co-xl-12 justify-content-center d-flex'>
								<div>
									<img
										src={require('../images/Layer_head_title.png').default}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>
						</section>
					</div>
					<div className='row flex-grow-1'>
						<div className='col-12 mt-2'>
							<div className='w-100 text-center center-div'>
								<article className='main-text'>
									CertiK leads blockchain security by pioneering the use of cutting-edge Formal
									Verification technology on smart contracts and blockchains. Unlike traditional
									security audits, Formal Verification mathematically proves program correctness and
									hacker-resistance. CertiK unites exceptional talent by sourcing employees from the
									best universities and companies across the world and we are confident in their
									abilities to ensure that our SOWL Smart Contract is completely secure.
								</article>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div className='d-flex justify-content-center mt-4'>
								<figure className='w-75'>
									<img
										src={require('../images/CERTIK_LOGO.png').default}
										alt=''
										className='img-fluid'
									/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Audit;
