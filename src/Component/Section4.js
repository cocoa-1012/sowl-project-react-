import React from 'react';
import Button from '../Component/Button';
import './Section4.scoped.css';

const Section4 = () => {
	return (
		<div className='row section4'>
			<div className='row'>
				<div>
					<p className='large-title'>
						<span className='gradient-text-outline'>Buy now</span>
					</p>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-6'>
					<img
						className='section4_icon'
						src={require('../images/pancake_icon.png').default}
						alt=''
					/>
					<div className='section4_btn2'>
						<Button
							link='https://pancakeswap.finance/'
							fontWeight='1000'
							text='Pancakeswap'
							size='22px'
							color='#291647'
							target="_blink"
						/>
					</div>
				</div>

				<div className='col-md-6'>
					<img
						className='section4_icon'
						src={require('../images/THRAX2LOGONOBG.png').default}
						alt=''
					/>
					<div className='section4_btn1'>
						<Button
							link='https://www.thraxcrypto.com/'
							fontWeight='1000'
							text='thrax'
							size='22px'
							maxWidth='21vw'
							color='#291647'
							padding="1em 2em"
							target="_blink"
						/>
					</div>
				</div>
			</div>

			<div className='row'>
				<button className='large-purple-button'>
				<a href="http://presale.sowltoken.com/" target="_blank">
					<span className='gradient-text-outline'>Get in early!</span>
				</a>
				</button>
			</div>
		</div>
	);
};

export default Section4;
