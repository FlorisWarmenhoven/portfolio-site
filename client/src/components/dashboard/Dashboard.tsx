import React, { useEffect } from "react";
import authenticateUser from "../../lib/authenticateUser";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export default function Dashboard(props: Props) {
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
}
