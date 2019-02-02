import React, { Component } from "react";
import styled from "../../../types/styled-components";
const aboutImage = require("../../assets/temporary-image.jpg");

const StyledAbout = styled.div`
	display: flex;
	flex-direction: row;
	background-attachment: scroll;
`;

const StyledAboutContent = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	padding: 115px 10%;

	@media (max-width: 1200px) {
		width: 100%;
	}
`;

const StyledAboutPicture = styled.div`
	width: 40%;
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${aboutImage});

	@media (max-width: 1200px) {
		display: none;
		width: 0%;
	}
`;

const StyledSectionText = styled.div`
	font-size: 5rem;
	font-family: "Montserrat";
	font-weight: 700;
	letter-spacing: 0;
	color: #f2f2f2;
	width: 100%;
`;

const StyledSloganText = styled.div`
	font-size: 2rem;
	color: #333c4e;
	font-family: "Montserrat";
	font-weight: 700;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-top: 0.25rem;
	margin-bottom: 1rem;
`;

const StyledIntroductionText = styled.div`
	color: #7e8890;
	font-size: 19px;
	font-family: "Georgia";
	line-height: 36px;
	font-style: italic;
	margin-bottom: 1.25rem;
`;

const StyledContentText = styled.div`
	font-family: "Lato";
	color: #747474;
	font-size: 15px;
	line-height: 36px;
`;

export default class About extends Component {
	render() {
		return (
			<StyledAbout>
				<StyledAboutContent>
					<StyledSectionText>About.</StyledSectionText>
					<StyledSloganText>Inspired by knowledge.</StyledSloganText>
					<StyledIntroductionText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						consectetur a nisl a tincidunt. Etiam placerat velit sem, vel
						suscipit augue fermentum nec. Sociis natoque penatibus et magnis
						dis.
					</StyledIntroductionText>
					<StyledContentText>
						Parturient montes, nascetur ridiculus mus. Maecenas ac finibus
						turpis. Vivamus et elit in leo pretium pharetra. Sed lobortis urna
						turpis, id ultricies dolor pharetra ac. Proin suscipit odio non
						libero ullamcorper, sit amet tincidunt lacus porta. Aenean sodales
						lectus ex, non sagittis nibh ultricies at. Aliquam nec dolor
						posuere, vulputate mauris at, fermentum Donec ligula metus,
						hendrerit at malesuada vel, facilisis sit amet dui. Aliquam erat
						volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante,
						eu pretium ipsum bibendum fermentum. Proin dui arcu, mattis non
						ultricies ac, pellentesque eget ipsum. Nullam tincidunt orci in
						interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium
						vel vitae enim. Vestibulum id ipsum risus. Suspendisse lectus
						tortor, pretium ut orci vitae, mollis iaculis risus.
					</StyledContentText>
				</StyledAboutContent>
				<StyledAboutPicture />
			</StyledAbout>
		);
	}
}
