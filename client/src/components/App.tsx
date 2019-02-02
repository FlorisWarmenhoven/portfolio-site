import React, { Component } from "react";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
	uri: "http://localhost:8000/api/graphql",
});

client
	.query({
		query: gql`
			{
				users {
					id
					name
				}
			}
		`,
	})
	.then(result => console.log(result));

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}
