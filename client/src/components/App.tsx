import React, { Component } from "react";
import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}
