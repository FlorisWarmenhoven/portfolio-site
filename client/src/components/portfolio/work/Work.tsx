import React, { FC } from 'react';
import styled from '../../../../types/styled-components';
import { WorkItem } from './WorkItem';

export const Work: FC = () => {
	return (
		<StyledWork>
			<WorkItem />
		</StyledWork>
	);
};

const StyledWork = styled.div`
	font-family: 'Montserrat';
	width: 100%;
	height: 100vh;
	background-color: gray;
`;
