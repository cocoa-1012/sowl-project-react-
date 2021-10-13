import React from 'react';
import Button from '../Component/Button';
import Line from '../Component/Line';
import Nav from '../Component/Nav';
import Section1 from '../Component/Section1';
import Section2 from '../Component/Section2';
import Section4 from '../Component/Section4';
import './Home.scoped.css';

const Home = () => {
	return (
		<>
			<Nav />
			<Section1 />
			<Line />
			<Section2 />
			<Line />
			<Section4 />
			<Line />
			<section className='BG-color position-relative'>
				<figure className='TECH_LINES'>
					<img src={require('../images/Layer_1.png').default} alt='' className='img-fluid' />
				</figure>
				<div className='container-fluid pt-5 top-0'>
					<div className='row position-relative mb-5'>
						<section className='title-image-ROADMAP'>
							<div className='co-xl-12 justify-content-center d-flex'>
								<div className='title-image-road'>
									<p className='large-title'>
										<span className='gradient-text-outline'>Roadmap</span>
									</p>
								</div>
							</div>
						</section>
					</div>
					<div className='row'>
						<div className='col-12 d-flex justify-content-center position-relative mt-2'>
							<figure>
								<img
									src={require('../images/ROADMAP_IMG.png').default}
									alt=''
									className='img-fluid'
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
			<section className='BG-color position-relative'>
				<figure className='TECH_LINES'>
					<img src={require('../images/Layer_1.png').default} alt='' className='img-fluid' />
				</figure>
				<div className='container-fluid pt-5 top-0'>
					<div className='row position-relative mb-5'>
						<section className='title-image-ROADMAP'>
							<div className='co-xl-12 justify-content-center d-flex'>
								<div className='title-image-road'>
									<p className='large-title'>
										<span className='gradient-text-outline'>ECOSYSTEM</span>
									</p>
								</div>
							</div>
						</section>
					</div>
					<div className='row'>
						<div className='col-12 d-flex justify-content-center position-relative mt-2'>
							<figure>
								<img
									src={require('../images/ROADMAP_IMG.png').default}
									alt=''
									className='img-fluid'
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
			<section className='row'>
				<Button
					link='https://d7a71bc2-fca0-408a-b8c5-358f90e9d56a.filesusr.com/ugd/6cd61e_a7a1a43b99e34decb4474cb2abdf7cd2.pdf'
					fontWeight='700'
					text='Audit'
					size='22px'
					maxWidth='26vw'
					color='#291647'
					target='_blink'
				/>
			</section>
			<section className='row'>
				<Button
					link='/Contact'
					fontWeight='700'
					text='Contact Us'
					size='22px'
					maxWidth='26vw'
					color='#291647'
				/>
			</section>
			<div className='row mt-5' />
		</>
	);
};

export default Home;
