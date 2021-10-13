import React from 'react';
import border from '../images/border.png';
import './Line.scoped.css';

const Line = () => {
	return (
		<div className='row h-12'>
			<div>
				<img className='section_border' src={border} alt='' />
			</div>
		</div>
	);
};

export default Line;
