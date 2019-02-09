import React from "react";

import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
	if (!localStorage.getItem("token")) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
};
