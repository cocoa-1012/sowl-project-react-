import styled from 'styled-components';

export const StyledBurger = styled.button`
	position: absolute;
	top: 20px;
	right: ${({ open }) => (open ? '8vw' : '8vw')};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 25px;
	height: 25px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 999;

	span {
		width: 26px;
		height: 4px;
		background: ${({ open }) => (open ? '#fff' : '#fff')};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
