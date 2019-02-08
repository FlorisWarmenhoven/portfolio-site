import React, { FC } from "react";
import { Routes } from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "../apolloClient";

interface Props {}

export const App: FC<Props> = props => {
	return (
		<ApolloProvider client={apolloClient}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ApolloProvider>
	);
};
