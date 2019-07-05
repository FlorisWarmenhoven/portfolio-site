import React, { FC } from 'react';
import styled from '../../../../types/styled-components';
import { FaBars } from 'react-icons/fa';

export const MobileNavbar: FC = () => {
	const toggleLinks = () => {
		const linksElement = document.getElementById('myLinks');
		if (linksElement.style.display === 'block') {
			linksElement.style.display = 'none';
		} else {
			linksElement.style.display = 'block';
		}
	};

	return (
		<div>
			<StyledMobileNavbar>
				<StyledLogoArea>
					<a href="">LOGO</a>
				</StyledLogoArea>
				<NavLinks id="myLinks">
					<a href="#">Home</a>
					<a href="">About</a>
					<a href="">Work</a>
					<a href="">Experience</a>
					<a href="">Skill</a>
					<a href="">CV</a>
					<a href="">Contact</a>
				</NavLinks>
				<a className="icon" onClick={toggleLinks}>
					<FaBars />
				</a>
			</StyledMobileNavbar>
		</div>
	);
};

const StyledMobileNavbar = styled.div`
	/* Ensures Mobile navbar hides when it is larger than 800px */
	@media (min-width: 800px) {
		display: none;
		width: 0%;
	}
	font-family: 'PT Sans', sans-serif;
	background-color: #232a34;
	padding: 20px 30px;

	a {
		padding: 12px 0px;
		text-decoration: none;
		font-size: 1.1rem;
		display: block;
		color: #505865;
	}

	a.icon {
		display: block;
		position: absolute;
		right: 10px;
		top: 16px;
		padding: 13px;
		font-size: 1.4rem;
	}

	a.icon:hover {
		cursor: pointer;
	}
`;

const StyledLogoArea = styled.div`
	height: 54px;
	width: 30%;
	margin-left: -30px;
	margin-right: -30px;

	a {
		text-decoration: none;
		padding-left: 30px;
		padding-right: 30px;
		color: #505865;
	}
`;

const NavLinks = styled.div`
	display: none;
	position: relative;
	margin-left: -30px;
	margin-right: -30px;
	margin-bottom: -20px;

	a {
		border-top: 1px solid rgba(80, 88, 101, 0.2);
		padding-left: 30px;
	}

	a:last-child {
		border-bottom: 1px solid rgba(80, 88, 101, 0.2);
	}

	a:hover {
		background-color: #313a48;
		color: #778293;
	}
`;
