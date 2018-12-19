import React, { Component } from "react";
import styled from "../../types/styled-components";

const StyledNavigationBar = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default class Navbar extends Component {
	render() {
		return (
			<StyledNavigationBar>
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>About</li>
					<li>Work</li>
					<li>Experience</li>
					<li>Skill</li>
					<li>Cv</li>
					<li>Contact</li>
				</ul>
			</StyledNavigationBar>
		);
	}
}
