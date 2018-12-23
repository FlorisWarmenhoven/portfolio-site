import React, { Component } from "react";
import styled from "../../types/styled-components";
import {
	FaHome,
	FaUser,
	FaBriefcase,
	FaLightbulb,
	FaChartBar,
	FaPhone,
	FaFileAlt,
} from "react-icons/fa";

const StyledNavigationBar = styled.div`
  font-family: "PT Sans", sans-serif;
  background-color: #232a34;
  min-width: 215px;
  min-height: 100vh;
  color: #f4ad24;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    height: 108.5px;
    width: 100%;
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    border-bottom-color: #303947;
    border-bottom-width: 1px;
    border-style: solid;

    .icon {
      font-size: 39px;
      margin-bottom: 5px;
    }
  }

  #logo {
    height: 100%;
  }
`;

const StyledLogoArea = styled.div`
  height: 172px;
  width: 100%;
`;

export default class Navbar extends Component {
	render() {
		return (
			<StyledNavigationBar>
				<StyledLogoArea>
					<li id="logo">
						<a href="">LOGO</a>
					</li>
				</StyledLogoArea>
				<ul>
					<li>
						<a href="#">
							<FaHome className="icon" />
							Home
						</a>
					</li>
					<li>
						<a href="">
							<FaUser className="icon" />
							About
						</a>
					</li>
					<li>
						<a href="">
							<FaBriefcase className="icon" />
							Work
						</a>
					</li>
					<li>
						<a href="">
							<FaLightbulb className="icon" />
							Experience
						</a>
					</li>
					<li>
						<a href="">
							<FaChartBar className="icon" />
							Skill
						</a>
					</li>
					<li>
						<a href="">
							<FaFileAlt className="icon" />
							Cv
						</a>
					</li>
					<li>
						<a href="">
							<FaPhone className="icon" />
							Contact
						</a>
					</li>
				</ul>
			</StyledNavigationBar>
		);
	}
}
