import React, { Component } from "react";
import styled from "../../types/styled-components";

const StyledLanding = styled.div`
  background-position: 50% 50%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-image: url("https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg");

  @media (max-width: 800px) {
    max-height: 1100px;
  }
`;
export default class Landing extends Component {
	render() {
		return <StyledLanding />;
	}
}
