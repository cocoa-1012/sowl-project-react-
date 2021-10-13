import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	background: linear-gradient(
		45deg,
		#466171 12%,
		#766ad8 22%,
		#262233 46%,
		#9b6ab9 76%,
		#220527 100%
	);
	opacity: 0.9;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	height: 100vh;
	padding-top: 60px;
	padding-left: 10vw;
	padding-right: 20vw;
	position: absolute;
	top: -10px;
	left: 0;
	transition: transform 0.2s ease-in-out;
	z-index: 888;
	@media (max-width: 768px) {
		width: 100vw;
	}
`;

export const NavLink = styled(Link)`
	text-transform: uppercase !important;
	-webkit-text-stroke: 0.15em rgba(255, 255, 255, 0.01);
	font-family: 'AvenirNext Heavy', sans-serif;
	letter-spacing: 2.5px;
	display: flex;
	align-items: flex-end;
	text-decoration: none;
	height: 50px;
	font-size: 17px !important;
	font-weight: 600;
	cursor: pointer;
`;
