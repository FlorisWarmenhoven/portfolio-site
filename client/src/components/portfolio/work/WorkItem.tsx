import React, { FC } from 'react';
import styled from '../../../../types/styled-components';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const portfolioItem = require('../../../assets/portfolio-site.jpg');

export const WorkItem: FC = () => {
	return (
		<StyledWorkItem>
			<StyledImage>
				<img src={portfolioItem} alt="test" />
			</StyledImage>
			<h2>Portfolio site</h2>
		</StyledWorkItem>
	);
};

const StyledWorkItem = styled.div`
	height: 400px;
	width: 300px;
	background-color: lightblue;
	text-align: center;
	border-radius: 10px;
`;

const StyledImage = styled.div`
	img {
		object-fit: contain;
		max-width: 100%;
		max-height: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		filter: brightness(70%);
	}

	img:hover {
		filter: brightness(100%);
	}
`;
