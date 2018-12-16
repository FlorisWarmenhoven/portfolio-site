import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import { prisma } from "./prisma";

const schemaPath =
	process.env.PRODUCTION === "true"
		? "server/src/schema.graphql"
		: "src/schema.graphql";

export const server = new GraphQLServer({
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
