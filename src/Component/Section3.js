import React from 'react';
import './Section3.scoped.css';

const Section3 = () => {
	return (
		<div className='col-12 col-md-4 section3'>
			<div>
				<div className='text3'>THE SOWL INTERACTIVE INNOVATIVE 11™</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec1'>
						<img src={require('../images/decentralized.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec1'>decentralized</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec2'>
						<img src={require('../images/f_deflationary.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec2'>deflationary</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec3'>
						<img src={require('../images/f_distributive.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec3'>distributive</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec4'>
						<img src={require('../images/double_liquidity.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec4'>
						double
						<br />
						liquidity
					</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec5'>
						<img src={require('../images/f_democratic.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec5'>democratic</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec6'>
						<img src={require('../images/fix.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec6'>fixed supply</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec7'>
						<img src={require('../images/f_founder.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec7'>
						founder
						<br />
						transparency
					</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec8'>
						<img src={require('../images/f_charity.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec8'>
						charity-
						<br />
						supporting
					</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec9'>
						<img src={require('../images/f_utility.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec9'>Utility Token</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec10'>
						<img src={require('../images/f_rewards.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec10'>rewards</a>
				</div>
			</div>
			<div className='d-flex'>
				<div className='icon'>
					<a className='_link' href='/features#sec11'>
						<img src={require('../images/f_icon.png').default} alt='' />
					</a>
				</div>
				<div className='text4'>
					<a href='/features#sec11'>
						Supported
						<br />
						by an app
					</a>
				</div>
			</div>
		</div>
	);
};

export default Section3;
