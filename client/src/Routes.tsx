import React from "react";
import { Route, Switch } from "react-router-dom";
import { Portfolio } from "./components/portfolio/Portfolio";
import Login from "./components/dashboard/Login";
import Dashboard from "./components/dashboard/Dashboard";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route path="/" component={Portfolio} />
		</Switch>
	);
}
