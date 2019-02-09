import React, { FC } from "react";
import styled from "../../../types/styled-components";
const landingImage = require("../../assets/landing-image.jpg");

interface Props {}

export const Landing: FC<Props> = props => {
	return (
		<StyledLanding>
			<h1>
				This site is still under development. All images and text are
				placeholder
			</h1>
		</StyledLanding>
	);
};

const StyledLanding = styled.div`
	background-position: 50% 50%;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-image: url(${landingImage});

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		color: yellow;
	}

	@media (max-width: 800px) {
		max-height: 1100px;
	}
`;
