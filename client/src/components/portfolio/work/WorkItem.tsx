import React, { FC } from 'react';
import styled from '../../../../types/styled-components';
import { StyledComponent } from 'styled-components';
import { IThemeInterface } from '../../../../types/theme';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const placeholder = require('../../../assets/placeholder.png');
import { FaGithub, FaSearch } from 'react-icons/fa';
export const WorkItem: FC = () => {
	return (
		<StyledContainer>
			<StyledImage src={placeholder} />
			<StyledText>Project Site</StyledText>
			<ButtonsContainer>
				<StyledButton>
					<StyledButtonText>
						<FaSearch />
						LEARN MORE
					</StyledButtonText>
				</StyledButton>
				<StyledButton>
					<StyledButtonText>
						<FaGithub style={{ fontSize: 20, lineHeight: 1 }} />
						GITHUB
					</StyledButtonText>
				</StyledButton>
			</ButtonsContainer>
		</StyledContainer>
	);
};

let StyledImage: StyledComponent<'img', IThemeInterface>;
let ButtonsContainer: StyledComponent<'div', IThemeInterface>;
let StyledText: StyledComponent<'span', IThemeInterface>;

const StyledContainer = styled.div`
	height: 300px;
	width: 390px;
	text-align: center;
	position: relative;

	:hover ${StyledImage} img {
		opacity: 0.15;
	}

	:hover ${ButtonsContainer} * {
		opacity: 1;
		bottom: 24%;
	}

	:hover ${StyledText} span {
		opacity: 1;
		top: 24%;
	}
`;

ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	position: absolute;
	bottom: 0%;
	width: 100%;
	opacity: 0;
	transition: all 0.3s ease-in-out;
`;

StyledText = styled.span`
	font-size: 20px;
	width: 100%;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s ease-in-out;
`;

StyledImage = styled.img`
	transition: all 0.3s ease-in-out;
`;

const StyledButton = styled.button`
	width: 170px;
	padding: 7px 0px;
	border: 2px solid #e31b6d;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	font-size: 18px;
	font-family: 'Montserrat';

	:hover {
		background: #e31b6d;
		color: white;
	}
`;

const StyledButtonText = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 5px;
	}
`;
