import React, { Component } from "react";
import DefaultNavbar from "./navbars/DefaultNavbar";
import MobileNavbar from "./navbars/MobileNavbar";

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
