import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Portfolio } from "./components/portfolio/Portfolio";
import { PrivateRoute } from "./components/shared/PrivateRoute";
import { Portal } from "./components/portal/Portal";
import { Login } from "./components/portal/Login";

interface Props {}

export const Routes: FC<Props> = props => {
	return (
		<>
			<Switch>
				<Route exact path="/login" component={Login} />
				<PrivateRoute path="/portal" component={Portal} />
				<Route component={Portfolio} />
			</Switch>
		</>
	);
};
