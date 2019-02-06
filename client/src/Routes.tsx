import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Portfolio } from "./components/portfolio/Portfolio";
import Login from "./components/dashboard/Login";
import Dashboard from "./components/dashboard/Dashboard";
import TechnologyPage from "./components/dashboard/technology/TechnologyPage";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	if (!localStorage.getItem("token")) {
		return <Redirect to="/login" />;
	}
	return <Component props={rest} />;
};

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/technologies" component={TechnologyPage} />
				<Route path="/" component={Portfolio} />
			</Switch>
		);
	}
}
