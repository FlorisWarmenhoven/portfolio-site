import ApolloClient from 'apollo-boost';

// Define the client that is used to communicate with our GraphQL back-end
// This sets a bearer token on each request if a 'token' is present.
export const apolloClient = new ApolloClient({
	uri: process.env.GRAPHQL_API_ENDPOINT,
	request: async operation => {
		const token = await localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		});
	}
});
