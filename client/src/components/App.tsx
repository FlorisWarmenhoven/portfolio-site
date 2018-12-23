import React, { Component } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import styled from "../../types/styled-components";
import About from "./About";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledPages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export class App extends Component {
	render() {
		return (
			<StyledApp>
				<Navbar />
				<StyledPages>
					<Landing />
					<About />
				</StyledPages>
			</StyledApp>
		);
	}
}
