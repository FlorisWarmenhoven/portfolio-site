import React, { useEffect, FC } from "react";
import { authenticateUser } from "../../lib/authenticateUser";
import { RouteComponentProps, Switch } from "react-router-dom";
import styled from "../../../types/styled-components";
import { SideNav } from "./SideNav";
import { PrivateRoute } from "../shared/PrivateRoute";
import { TechnologyPage } from "./technology/TechnologyPage";

interface Props extends RouteComponentProps {}

export const Portal: FC<Props> = props => {
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
		<StyledDashboard>
			<SideNav />
			<button onClick={() => handleLogout()}>Logout</button>
			<h1>This is the dashboard.</h1>

			<Switch>
				<PrivateRoute
					path={`${props.match.url}/technologies`}
					component={TechnologyPage}
				/>
			</Switch>
		</StyledDashboard>
	);
};

const StyledDashboard = styled.div`
	background-color: lightblue;
	height: 100vh;
`;
