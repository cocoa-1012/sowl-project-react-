import React from 'react';
import Nav from '../Component/Nav';
import Sec from '../Component/Sec';
import key from '../images/key.png';
import './Features.scoped.css';

const Features = () => {
	return (
		<>
			<Nav />
			<div className='row f_section1'>
				<div>
					<img className='key mt-5' src={key} alt='' />
				</div>
				<Sec />
			</div>
		</>
	);
};

export default Features;
