import React, { FC } from "react";
import styled from "../../../../types/styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const TopNav: FC = () => {
	return (
		<StyledTopNav>
			<StyledLogoutButton>
				<FaSignOutAlt /> Logout
			</StyledLogoutButton>
		</StyledTopNav>
	);
};

const StyledTopNav = styled.div`
	position: fixed;
	top: 0px;
	margin-left: 250px;
	height: 50px;
	width: calc(100% - 250px);
	background-color: violet;
	color: black;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledLogoutButton = styled.button`
	font-size: 20px;
	margin-right: 15px;
	background-color: transparent;
	border: none;
	justify-content: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	:hover {
		cursor: pointer;
	}
`;
