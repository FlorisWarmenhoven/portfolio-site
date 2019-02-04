import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Portfolio } from "./components/portfolio/Portfolio";
import Login from "./components/dashboard/Login";
import Dashboard from "./components/dashboard/Dashboard";
import authenticateUser from "./lib/authenticateUser";

const PrivateRoute = ({
	component: Component,
	isAuthenticated,
	isLoading,
	...rest
}: any) => {
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isAuthenticated) {
		return <Redirect to="/login" />;
	}
	return <div>pew</div>;
};

export default class Routes extends Component {
	state = {
		isAuthenticated: false,
		isLoading: true,
	};

	async componentDidMount() {
		authenticateUser()
			.then(response => {
				this.setState({ isAuthenticated: true, isLoading: false });
			})
			.catch(error => {
				this.setState({ isAuthenticated: false, isLoading: false });
			});
	}

	render() {
		const { isLoading, isAuthenticated } = this.state;

		return (
			<Switch>
				<Route exact path="/login" component={Login} />
				<PrivateRoute
					exact
					path="/dashboard"
					component={Dashboard}
					isAuthenticated={isAuthenticated}
					isLoading={isLoading}
				/>
				<Route path="/" component={Portfolio} />
			</Switch>
		);
	}
}
