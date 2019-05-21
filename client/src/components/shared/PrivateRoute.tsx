import React from "react";

import { Redirect, Route, RouteProps } from "react-router";

export const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
	if (!localStorage.getItem("token")) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
};
