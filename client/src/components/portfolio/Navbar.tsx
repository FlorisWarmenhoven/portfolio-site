import React, { FC } from "react";
import { DefaultNavbar } from "./navbars/DefaultNavbar";
import { MobileNavbar } from "./navbars/MobileNavbar";

export const Navbar: FC = () => {
	return (
		<>
			<DefaultNavbar />
			<MobileNavbar />
		</>
	);
};
