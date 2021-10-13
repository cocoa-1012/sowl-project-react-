import React from 'react';
import './Academy.scoped.css';

const Academy = (props) => {
	return (
		<>
			<section className='BG-AUDIT position-relative d-flex'>
				<div className='position-fixed'>
					<figure className='TECH_LINES'>
						<img
							src={require('../images/2_TECH_LINES_4.png').default}
							alt=''
							className='img-fluid'
						/>
					</figure>
				</div>
				<div className='container-fluid g-0 position-absolute top-0 d-flex flex-column justify-content-start h-100'>
					<div className='row g-0'>
						<div className='col-12'>
							<div className='position-relative bg-header'>
								<div className='bg-logo py-2'>
									<img src={require('../images/LOGO.png').default} alt='' className='img-fluid' />
								</div>
							</div>
						</div>
					</div>
					<div className='row g-0 mt-5'>
						<div className='col-12'>
							<div className='d-flex justify-content-center'>
								<div className='first_title'>
									<img
										src={require('../images/first_title.png').default}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>
						</div>
						<div className='col-12'>
							<div className='d-flex justify-content-center'>
								<div className='owl-img p-3'>
									<img src={require('../images/owl_1.png').default} alt='' className='img-fluid' />
								</div>
							</div>
						</div>
						<div className='col-12 mt-5'>
							<article className='d-flex flex-column justify-content-center align-items-center'>
								<p className='secnd-text'>
									Preschool eLearning With Fun 3D Video Games & Features For Your Child Genius!
								</p>
								<p className='secnd-text'>
									Download Today To Get 2 Free Levels & 20 Free Minutes From Our AI & AR Shop!
								</p>
								<p className='secnd-text'>
									EarlyBird is the Best Preschool and Pre-K Virtual Learning App for Children:
									EarlyBird- a super fun & high-tech early stage child developmental learning
									educational aide that helps parents and teachers alike with teaching children
									everything from the alphabet and numbers to shapes and colors to feelings and
									counting money!
								</p>
								<p className='secnd-text'>
									We do this by combining simplicity with innovative classroom technology
									techniques, including: Artificial Intelligence (like Amazon Alexa, but as a
									Tutor), Video Games (like Candy Crush with an educational twist), Augmented
									Reality (like Snapchat for the classroom), and Prizes (we all love school when we
									get incentives)!
								</p>
								<p className='secnd-text'>
									There is absolutely nothing as powerful as EarlyBird when it comes to Virtual
									Learning for children ages 2-8! ABCMouse is good, but it doesn’t have the awesome
									features we have (and we are cheaper!). We have the modern features that children
									need to thrive!
								</p>
								<p className='secnd-text'>
									We are not a replacement for school. In fact, we are a supplemental eLearning tool
									that truly helps children, parents, teachers, and tutors alike! We strongly
									encourage collaborative learning at home and at school.
								</p>
								<p className='secnd-text'>
									We are not a replacement for school. In fact, we are a supplemental eLearning tool
									that truly helps children, parents, teachers, and tutors alike! We strongly
									encourage collaborative learning at home and at school.
								</p>
								<p className='secnd-text'>Is EarlyBird safe?</p>
								<p className='secnd-text'>
									Absolutely! It is 100% COPPA compliant and we will soon be KidSAFE Certified!
									Furthermore, we are a Cecil County, Maryland Small Business Grant Winner!
								</p>
								<p className='secnd-text'>
									Never before has a virtual learning app brought these technologies together into a
									fun and streamlined user interface. Download our app now, which was designed in
									Unity, and join the virtual learning revolution today so your child can become an
									“EarlyBird Child Genius” tomorrow!
								</p>
							</article>
						</div>
						<div className='col-12'>
							<div className='w-100'>
								<img
									src={require('../images/2_brovider.png').default}
									alt=''
									className='img-fluid'
								/>
							</div>
						</div>
						<div className='col-12'>
							<div className='d-flex justify-content-center mt-5'>
								<div className='first_title'>
									<img
										src={require('../images/title_2.png').default}
										alt=''
										className='img-fluid'
									/>
								</div>
							</div>
						</div>
						<div className='col-12'>
							<div className='d-flex justify-content-center'>
								<div className='owl-img p-3'>
									<img src={require('../images/crabto.png').default} alt='' className='img-fluid' />
								</div>
							</div>
						</div>
						<div className='col-12'>
							<article className='d-flex flex-column justify-content-center align-items-center mt-5'>
								<p className='secnd-text'>
									AAC means everything to #TeamWrallett as we've pioneered a new way to crypto. By
									taking a unique digital asset such as our line of upcoming apps, including our
									current one @ebkidsapp and tokenizing them - we are providing early stage
									liquidity, transparency, and democracy to the old school corporate process. An App
									is now "Also A Crypto"
								</p>
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Academy;
