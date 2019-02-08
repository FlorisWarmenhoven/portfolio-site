import ApolloClient from "apollo-boost";

export const apolloClient = new ApolloClient({
	uri: process.env.GRAPHQL_API_ENDPOINT || "http://localhost:8000/api/graphql",
});
