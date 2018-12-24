import React, { Component } from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";

export default class Navbar extends Component {
	render() {
		return (
			<>
				<DefaultNavbar />
				<MobileNavbar />
			</>
		);
	}
}
