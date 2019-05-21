/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import styled from "../../../types/styled-components";
const landingImage = require("../../assets/landing-image.jpg");
const profilePicture = require("../../assets/profile-picture.jpg");

export const Landing: FC = () => {
	return (
		<StyledLanding>
			<Introduction>
				<h3>Floris Warmenhoven</h3>
				<hr />
				<p>
					Hi there! I'm Floris. This site is used showcase my portfolio as well
					as providing information about myself and my skills, my cv and a way
					for you to contact me. Browse around! If you have questions, you can
					contact me through contact form at the end of the page.
				</p>
				<p />
			</Introduction>
			<Picture />
		</StyledLanding>
	);
};

const StyledLanding = styled.div`
	font-family: "Montserrat";

	background-position: 50% 50%;
	height: 80vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-image: url(${landingImage});

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 960px) {
		max-height: 1100px;
		flex-direction: column-reverse;
		padding-bottom: 50px;
	}
`;

const Picture = styled.div`
	background-image: url(${profilePicture});
	width: 300px;
	height: 300px;
	background-size: cover;
	border-radius: 50%;

	@media (max-width: 960px) {
		margin-bottom: 50px;
	}
`;

const Introduction = styled.div`
	@media (max-width: 960px) {
		width: 90%;
		padding-right: 0px;
	}

	display: flex;
	flex-direction: column;
	width: 50%;
	color: white;
	font-size: 1.3rem;
	padding-right: 50px;

	hr {
		width: 100%;
	}

	h3 {
		padding: 0;
		margin: 0;
	}

	p {
		padding: 0;
		margin: 0;
		font-family: "Lato";
	}
`;
