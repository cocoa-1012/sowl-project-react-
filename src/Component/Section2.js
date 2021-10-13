import React from 'react';
import Button from '../Component/Button';
import app_store from '../images/app_store.png';
import playstore from '../images/playstore.png';
import section2_logo from '../images/section2_logo.png';
import './Section2.scoped.css';
import Section3 from './Section3';

const Section2 = () => {
	return (
		<div className='row section2'>
			<div className='col-12 col-md-8'>
				<div className='row-title'>WHO WE ARE</div>
				<div>
					<p className='hero-title'>
						<span className='gradient-text-outline'>We are SOWL!</span>
					</p>
				</div>
				<div className='text2'>
					The SOWL Token is the Official Cryptocurrency of the EarlyBird Children's Virtual Learning
					App. Yes, we took a mobile app that is already in the market and tokenized it, thereby
					creating a cryptocurrency!
				</div>
				<div>
					<img className='section1_logo' src={section2_logo} alt='' />
				</div>
				<div className='group row'>
					<Button
						link='https://www.yourclass.org'
						fontWeight='1000'
						text='yourclass.org'
						size='22px'
						maxWidth='30vw'
						color='#291647'
						target='_blank'
					/>
					<br />
					<div className='row'>
						<div className='col-md-3' />
						<div className='col-md-3 playstore text-center'>
							<a
								href='https://play.google.com/store/apps/details?id=com.eb.EarlyBird'
								target='_blank'
								rel='noreferrer'>
								<img src={playstore} alt='' />
							</a>
						</div>
						<div className='col-md-3 appstore text-center'>
							<a
								href='https://apps.apple.com/us/app/earlybird-elearning-for-kids/id1563904045'
								className='_link'
								target='_blank'
								rel='noreferrer'>
								<img src={app_store} alt='' />
							</a>
						</div>
						<div className='col-md-3' />
					</div>
				</div>

				<div className='text2'>
					THE SOWL TOKEN WILL BE AVAILABLE FOR PURCHASE ON THE EXCHANGE PANCAKESWAP, AND EVENUTALLY
					ON OTHERS SUCH AS BINANCE, COINBASE, AND KRAKEN. ADDITIONALLY, THE TOKEN CAN BE EARNED
					THROUGH OUR "EDUCATE & ELEVATE™" MODEL, WHERE CHILDREN (AND PARENTS ALIKE) LEARN ON THE
					EARLYBIRD MOBILE APP AND EARN TOKENS THAT WILL GROW IN VALUE, DEVELOPING AN AMAZING
					SAVINGS FUND (OR ANYTHING ELSE!). LASTLY, THE TOKEN WILL BE ABLE TO BE USED FOR PURCHASING
					EVERYTHING FROM "TOYS-TO-TUITION™" AT PARTICIPATING STORES, BUSINESSES, AND COLLEGES. WE
					HAVE TRULY CREATED A CRYPTOCURRENCY ECOSYSTEM WHERE EVERYONE INVOLVED WINS AND CHILDREN
					AROUND THE WORLD LEARN AND GROW! FOR ALL OF THE CRYPTOCURRENCY ENTHUSIASTS, THIS TOKEN IS
					SPECIAL BECAUSE IT HAS 11 DISTINCT FEATURES INCLUDING DOUBLE LIQUIDITY PROTOCOLS, A
					DEFLATIONARY TOKEN BURN PROTOCOL, COMMUNITY VOTING PROTOCOLS (INCLUDING A MINORITY-OWNED &
					SMALL BUSINESS ENHANCEMENT SYSTEM), AND AN AS- SET-PLEDGE PROTOCOL THAT TOGETHER PROVIDES
					FOR A HIGHLY-INNOVATIVE AND POWERFUL TOKEN.
				</div>
			</div>

			<Section3 />

			<div className='row section2_banner'>
				<p className='gradient-boxed-text'>
					<span>It is a BEP-20 token built on the globally powerful Binance blockchain.</span>
				</p>
			</div>

			<div className='row section2_banner2'>
				<div className='col-md-4 text-center text-lg-end'>
					<Button
						link='https://d7a71bc2-fca0-408a-b8c5-358f90e9d56a.filesusr.com/ugd/6cd61e_c4922a276530461d864c26a996e22706.pdf'
						fontWeight='700'
						text='Click to view our white paper'
						size='22px'
						maxWidth='26vw'
						color='#291647'
						target='_blink'
					/>
				</div>
				<div className='col-md-4 text-center'>
					<img className='logo2' src={require('../images/logo2.png').default} alt='' />
				</div>
				<div className='col-md-4 text-center text-lg-start'>
					<Button
						link='https://d7a71bc2-fca0-408a-b8c5-358f90e9d56a.filesusr.com/ugd/6cd61e_a2d9fe03141f4b67899a831cfc13a1da.pdf'
						fontWeight='700'
						text='click to view our visual white paper'
						size='22px'
						maxWidth='26vw'
						color='#291647'
						target='_blink'
						style={{ marginBottom: '50px' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Section2;
