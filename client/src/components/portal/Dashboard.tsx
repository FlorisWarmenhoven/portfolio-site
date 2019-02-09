import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const Dashboard: FC<Props> = props => {
	return <h1>This is the dashboard</h1>;
};
