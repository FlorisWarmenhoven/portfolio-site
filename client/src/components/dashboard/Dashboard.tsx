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

	function handleLogout() {
		localStorage.removeItem("token");
		props.history.push("/login");
	}

	return (
		<div>
			<button onClick={() => handleLogout()}>Logout</button>
			<h1>This is the dashboard.</h1>
		</div>
	);
};
