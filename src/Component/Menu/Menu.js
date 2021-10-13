import { bool } from 'prop-types';
import React from 'react';
import { NavLink, StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
	const isHidden = open ? true : false;

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<NavLink to='/'>
				<p>Home</p>
			</NavLink>
			<NavLink to='/howtobuy'>
				<p>Buy</p>
			</NavLink>
			<NavLink to='/Utility'>
				<p>Utility</p>
			</NavLink>
			<NavLink to='/Features'>
				<p>Features</p>
			</NavLink>
			<NavLink to='/Voting'>
				<p>Vote</p>
			</NavLink>
			<NavLink to='/Contact'>
				<p>Contact</p>
			</NavLink>
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
