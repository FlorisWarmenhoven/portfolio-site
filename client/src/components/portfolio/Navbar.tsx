import React, { FC } from "react";
import { DefaultNavbar } from "./navbars/DefaultNavbar";
import { MobileNavbar } from "./navbars/MobileNavbar";

interface Props {}

export const Navbar: FC<Props> = props => {
	return (
		<>
			<DefaultNavbar />
			<MobileNavbar />
		</>
	);
};
