import React, { FC } from "react";
import { Navbar } from "./Navbar";
import { Landing } from "./Landing";
import styled from "../../../types/styled-components";
import { About } from "./About";

interface Props {}

export const Portfolio: FC<Props> = props => {
	return (
		<StyledApp>
			<Navbar />
			<StyledPages>
				<Landing />
				<About />
			</StyledPages>
		</StyledApp>
	);
};

const StyledApp = styled.div``;

const StyledPages = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 215px;

	@media (max-width: 800px) {
		margin-left: 0px;
	}
`;
