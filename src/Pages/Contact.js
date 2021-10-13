import React from 'react';
import Button from '../Component/Button';
import Nav from '../Component/Nav';
import './Contact.scoped.css';

const Contact = (props) => {
	return (
		<>
			<Nav />
			<section className='BG-AUDIT position-relative d-flex h-100'>
				<div className='position-fixed'>
					<figure className='TECH_LINES'>
						<img src={require('../images/LINES_Net.png').default} alt='' className='img-fluid' />
					</figure>
				</div>
				<div className='container-fluid pt-5 position-absolute top-0 d-flex flex-column justify-content-start h-100'>
					<div className='row position-relative mb-5 mt-5'>
						<section>
							<div className='co-xl-12 justify-content-center d-flex'>
								<div>
									{/* <img
										src={require('../images/3_title.png').default}
										alt=''
										className='img-fluid'
									/> */}
									<p className='contactus-section-heading'>
										<span className='gradient-text-outline'>contact us</span>
									</p>
								</div>
							</div>
						</section>
					</div>

					<div className='row h-100 mt-5 align-items-end'>
						<div className='new_bg w-100 px-md-5 py-md-5 p-5'>
							<div className='contact-us-inner-bg d-flex justify-content-start flex-column align-items-center py-5 mx-5'>
								<div className='contact_US mt-xl-0 mt-md-0 mt-2 p-5'>
									<p className='contact-us-text'>To Learn More:</p>
								</div>
								<div className='socials-bg w-75 mt-xl-0 mt-md-0 mt-2 py-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='image_buttons d-flex w-75 flex-column'>
										<Button
											text='Email: info@sowltoken.com'
											link='mailto:info@sowltoken.com'
											size='2.5rem'
											color='#1a1c31'
										/>
									</div>
									<div className='box_media_3'>
										<div className='row'>
											<div className='col-sm-12 col-md-6'>
												<div className='d-flex justify-content-center align-items-center flex-column mt-xl-5 mt-md-3 mt-2'>
													<div className='image_buttons w-100 d-flex justify-content-center'>
														<Button text='Sowl:' minWidth='19rem' size='2.5rem' color='#1a1c31' />
													</div>
													<div className='w-100 justify-content-center'>
														<ul className='navbar-nav flex-row justify-content-center icon-media d-flex flex-wrap'>
															<li className='nav-item sm-icon p-1'>
																<a
																	href='https://www.instagram.com/sowltoken'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/IG_ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon p-1'>
																<a
																	href='https://www.facebook.com/sowltoken'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/FACEBOOK ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon p-1'>
																<a
																	href='https://www.twitter.com/sowltoken'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/TWITTER ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
														</ul>
														<ul className='navbar-nav flex-row justify-content-center icon-media d-flex flex-wrap'>
															<li className='nav-item sm-icon p-1'>
																<a href='https://t.me/sowltoken' target='_blank' rel='noreferrer'>
																	<img
																		src={require('../images/TELEGRAM ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon p-2'>
																<a
																	href='https://www.reddit.com/user/sowltoken'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/REDDIT ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon p-2'>
																<a
																	href='https://medium.com/@sowltoken'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/MEDIUM ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className='col-sm-12 col-md-6'>
												<div className='d-flex justify-content-center align-items-center flex-column mt-xl-5 mt-md-3 mt-2'>
													<div className='image_buttons w-100 d-flex justify-content-center'>
														<Button text='EarlyBird:' size='2.5rem' color='#1a1c31' />
													</div>
													<div className='w-100 d-flex justify-content-center'>
														<ul className='navbar-nav flex-row justify-content-center icon-media d-flex flex-wrap'>
															<li className='nav-item sm-icon'>
																<a
																	href='https://www.instagram.com/ebkidsapp'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/IG_ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon'>
																<a
																	href='https://www.facebook.com/ebkidsapp'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/FACEBOOK ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon'>
																<a
																	href='https://www.twitter.com/ebkidsapp'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/TWITTER ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
															<li className='nav-item sm-icon'>
																<a
																	href='https://www.youtube.com/channel/UCb-0w4wLcia5vmp9_JHSIFw'
																	target='_blank'
																	rel='noreferrer'>
																	<img
																		src={require('../images/YOUTUBE ICON.png').default}
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
