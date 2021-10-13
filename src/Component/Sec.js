import React from 'react';
import SecData from '../Data/SecData';
import transaction from '../images/transaction.png';
import './Sec.scoped.css';

const Sec = () => {
	return SecData.map((data) => {
		return (
			<>
				<div id={`sec${data.num}`}>
					<div className='col-md-9' style={{ margin: 'auto' }}>
						<div>
							<img className='f-icon' src={require(`../images/${data.img}.png`).default} alt='' />
						</div>
						{data.text1 && <div className='row-title'>{data.text1}</div>}
						{data.text5 && <div className='row-title'>{data.text5}</div>}

						{data.num === 7 ? (
							<div className='text2'>
								{data.text21}{' '}
								<a href='https://www.wrallett.com/about-us'>www.wrallett.com/about-us</a>
								{data.text71}
							</div>
						) : (
							<div className='text2'>{data.text21}</div>
						)}
						{data.text4 && <div className='text2'>{data.text4}</div>}
						{data.text3 && <div className='f-text3'>{data.text3}</div>}
						{data.text22 && <div className='text2'>{data.text22}</div>}
						{data.text23 && <div className='text2'>{data.text23}</div>}
					</div>
				</div>
				{data.num === 3 ? (
					<div>
						<img className='transaction' src={transaction} alt='' />
					</div>
				) : (
					''
				)}
			</>
		);
	});
};

export default Sec;
