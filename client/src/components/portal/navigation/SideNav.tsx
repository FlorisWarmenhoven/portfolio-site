import React, { FC } from "react";
import styled from "../../../../types/styled-components";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

export const SideNav: FC<Props> = props => {
	function handleLogout() {
		localStorage.removeItem("token");
		props.history.push("/login");
	}

	return (
		<StyledNavBar>
			<StyledLogoArea>Portal</StyledLogoArea>
			<ul>
				<StyledListItem>
					<StyledLink className="link" to="/portal/dashboard">
						Dashboard
					</StyledLink>
				</StyledListItem>

				<StyledListItem>
					<StyledLink className="link" to="/portal/technologies">
						Technologies
					</StyledLink>
				</StyledListItem>

				<StyledListItem>
					<StyledLink className="link" to="/portal/projects">
						Projects
					</StyledLink>
				</StyledListItem>

				<StyledListItem>
					<StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
				</StyledListItem>
			</ul>
		</StyledNavBar>
	);
};

const StyledNavBar = styled.div`
	font-family: "PT Sans", sans-serif;
	background-color: #232a34;
	min-width: 250px;
	min-height: 100vh;
	color: #f4ad24;
	position: fixed;
	top: 0px;
	display: flex;
	flex-direction: column;
	ul {
		margin: 0px;
		padding: 0px;
	}

	.link {
		text-decoration: none;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const StyledListItem = styled.li`
	list-style: none;
	height: 108.5px;
	width: 100%;
	border-top-width: 0px;
	border-right-width: 0px;
	border-left-width: 0px;
	border-bottom-color: #303947;
	border-bottom-width: 1px;
	border-style: solid;
`;
const StyledLogoArea = styled.div`
	background-color: lightpink;
	color: black;
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
`;

const StyledLogoutButton = styled.button`
	background-color: transparent;
	color: white;
	width: 100%;
	border: none;
	height: 100%;
	font-size: 15px;
	&:hover {
		cursor: pointer;
	}
`;
