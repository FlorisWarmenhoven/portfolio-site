import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import path from "path";
import express from "express";
import { prisma } from "./prisma";

// Variable port for Heroku or local development
const port = process.env.PORT || 8000;

// Variable schemaPath for Heroku or local development
const schemaPath =
	process.env.PRODUCTION === "true"
		? "server/src/schema.graphql"
		: "src/schema.graphql";

// GraphQL Yoga server options
const options = {
	port,
	endpoint: "/api/graphql",
	playground: "/api/playground",
	subscriptions: "/api/subscriptions",
};

// GraphQL Yoga server
const server = new GraphQLServer({
	typeDefs: schemaPath,
	resolvers: {
		Query,
		Mutation,
		User,
	},
	context: {
		prisma,
	},
});

// File path to client dist folder
const publicPath = express.static(
	path.join(__dirname, "..", "..", "client", "dist")
);
// File path to index.html in client dist folder
const indexPath = path.join(__dirname, "..", "..", "client", "dist/index.html");

// Serve static files from client dist folder
server.express.use(publicPath);

// if the request is for the api - pass it through
// otherwise send the index.html
server.express.use((req, res, next) => {
	const { originalUrl } = req;

	// TODO: Use RegEx to allow /api/*
	if (
		originalUrl === "/api/graphql" ||
		originalUrl === "/api/playground" ||
		originalUrl === "/api/subscriptions"
	) {
		return next();
	} else {
		res.sendFile(indexPath);
	}
});

// TODO: remove - for testing purposes
prisma.query
	.users(null, "{id name email}")
	.then(response => console.log(response))
	.catch(error => console.log(error));
console.log(prisma.users);
server.start(options);
