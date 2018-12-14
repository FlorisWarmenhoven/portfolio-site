import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import _ from "./env";
import { prisma } from "./prisma";

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers: {
		Query,
		Mutation,
		User,
	},
	context: {},
});

prisma.query
	.users(null, "{id name email}")
	.then(response => console.log(response))
	.catch(error => console.log(error));

server.start(() => {
	console.log("The server is up!");
});
