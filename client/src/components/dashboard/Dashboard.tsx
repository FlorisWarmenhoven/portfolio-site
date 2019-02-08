import React, { useEffect, FC } from "react";
import { authenticateUser } from "../../lib/authenticateUser";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const Dashboard: FC<Props> = props => {
	function isUserAuthenticated() {
		return authenticateUser();
	}

	useEffect(() => {
		const isAuthenticated = isUserAuthenticated();

		if (!isAuthenticated) {
			localStorage.removeItem("token");
			props.history.push("/login");
		}
	}, []);

	return (
		<div>
			<h1>This is the dashboard.</h1>
		</div>
	);
};
