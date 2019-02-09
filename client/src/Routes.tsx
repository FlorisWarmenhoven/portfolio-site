import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Login } from "./components/dashboard/Login";
import { Dashboard } from "./components/dashboard/Dashboard";
import { TechnologyPage } from "./components/dashboard/technology/TechnologyPage";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	if (!localStorage.getItem("token")) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
};

interface Props {}

export const Routes: FC<Props> = props => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<Route exact path="/technologies" component={TechnologyPage} />
			<Route path="/" component={Portfolio} />
		</Switch>
	);
};
