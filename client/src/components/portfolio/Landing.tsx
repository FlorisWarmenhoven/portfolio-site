import React, { FC } from "react";
import styled from "../../../types/styled-components";
const landingImage = require("../../assets/landing-image.jpg");

interface Props {}

export const Landing: FC<Props> = props => {
	return <StyledLanding />;
};

const StyledLanding = styled.div`
	background-position: 50% 50%;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-image: url(${landingImage});

	@media (max-width: 800px) {
		max-height: 1100px;
	}
`;
