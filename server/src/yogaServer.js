import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import { prisma } from "./prisma.js";

const schemaPath =
	process.env.PRODUCTION === "true"
		? "server/src/schema.graphql"
		: "src/schema.graphql";

const server = new GraphQLServer({
	typeDefs: schemaPath,
	resolvers: {
		Query,
		Mutation,
	},
	context(request) {
		return {
			prisma,
			request,
		};
	},
});

export default server;
