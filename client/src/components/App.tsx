import React, { Component } from "react";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "../apolloClient";

export class App extends Component {
	render() {
		return (
			<ApolloProvider client={apolloClient}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</ApolloProvider>
		);
	}
}
