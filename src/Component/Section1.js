import React from 'react';
import Button from '../Component/Button';
import coin from '../images/coin.png';
import section1_logo from '../images/section1_logo.png';
import './Section1.scoped.css';

const Section1 = () => {
	return (
		<div className='row section1'>
			<div className='col-md-2' />
			<div className='col-12 col-md-8'>
				<div className='row-title'>
					Welcome to the official Home of
					<br />
					the SOWL Token
				</div>
				<div>
					<img className='section1_logo' src={section1_logo} alt='' />
				</div>
				<div className='row-title'>
					The World's First Cryptocurrency <br />
					That Is Supported <br />
					By A Leading Mobile App
				</div>
				<Button
					link='http://presale.sowltoken.com/'
					fontWeight='1000'
					text='buy sowl'
					size='22px'
					maxWidth='21vw'
					color='#291647'
					target='_blank'
					style={{ marginBottom: '30px' }}
				/>
			</div>
			<div className='col-md-2'>
				<img className='section1_coin' src={coin} alt='' />
			</div>
		</div>
	);
};

export default Section1;
