import React, { Component } from "react";
import authenticateUser from "../../lib/authenticateUser";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}
export default class Dashboard extends Component<Props> {
	async componentDidMount() {
		const isAuthenticated = await authenticateUser();

		if (!isAuthenticated) {
			localStorage.removeItem("token");
			this.props.history.push("/login");
		}
	}
	render() {
		return <div>This is the dashboard.</div>;
	}
}
