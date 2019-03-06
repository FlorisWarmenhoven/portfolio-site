import React, { FC } from "react";
import { Routes } from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { apolloClient } from "../apolloClient";

// Using react-apollo-hooks until react-apollo supports hooks by default
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

interface Props {}

export const App: FC<Props> = () => {
	return (
		<ApolloHooksProvider client={apolloClient}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ApolloHooksProvider>
	);
};
