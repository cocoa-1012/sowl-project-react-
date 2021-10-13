import React, { useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png';
import Burger from './Burger/index';
import Menu from './Menu/index';
import './Nav.scoped.css';
import { GeneralDiv } from './NavbarElements';

export const Nav = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = 'main-menu';

	return (
		<div className='row'>
			<div className='menu'>
				<ul className='menu-ul'>
					<li>
						<Link to='/'>
							<img className='logo' src={logo} alt='' />
						</Link>
					</li>

					<div style={{ flex: 1 }} />

					<li className='menu_item'>
						<Link to='/' className='gradient-text-outline'>
							Home
						</Link>
					</li>
					<li className='menu_item'>
						<a href='/howtobuy' className='gradient-text-outline'>
							Buy
						</a>
					</li>
					<li className='menu_item'>
						<Link to='/Utility' className='gradient-text-outline'>
							Utility
						</Link>
					</li>
					<li className='menu_item'>
						<Link to='/Features' className='gradient-text-outline'>
							Features
						</Link>
					</li>
					<li className='menu_item'>
						<Link to='/Voting' className='gradient-text-outline'>
							Vote
						</Link>
					</li>
					<li className='menu_item'>
						<Link to='/Contact' className='gradient-text-outline'>
							Contact
						</Link>
					</li>
				</ul>
				<GeneralDiv ref={node}>
					<FocusLock disabled={!open}>
						<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
						<Menu open={open} setOpen={setOpen} id={menuId} />
					</FocusLock>
				</GeneralDiv>
			</div>
		</div>
	);
};

export default Nav;
