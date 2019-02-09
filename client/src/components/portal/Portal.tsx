import React, { useEffect, FC } from "react";
import { authenticateUser } from "../../lib/authenticateUser";
import { RouteComponentProps, Switch } from "react-router-dom";
import styled from "../../../types/styled-components";
import { PrivateRoute } from "../shared/PrivateRoute";
import { TechnologyPage } from "./technology/TechnologyPage";
import { Dashboard } from "./Dashboard";
import { SideNav } from "./navigation/SideNav";
import { TopNav } from "./navigation/TopNav";

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

	return (
		<>
			<SideNav {...props} />
			<TopNav {...props} />
			<StyledPortal>
				<Switch>
					<PrivateRoute
						path={`${props.match.url}/dashboard`}
						component={Dashboard}
					/>

					<PrivateRoute
						path={`${props.match.url}/technologies`}
						component={TechnologyPage}
					/>
				</Switch>
			</StyledPortal>
		</>
	);
};

const StyledPortal = styled.div`
	display: flex;
	flex-direction: column;
	background-color: lightblue;
	height: calc(100vh - 50px);
	margin-left: 250px;
	margin-top: 50px;
`;