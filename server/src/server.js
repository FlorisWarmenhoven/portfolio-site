import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import path from "path";
import express from "express";
import _ from "./env";
import { prisma } from "./prisma";

const port = process.env.PORT || 8000;
const options = {
	port,
	endpoint: "/graphql",
	playground: "/playground",
	subscriptions: "/subscriptions",
};

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers: {
		Query,
		Mutation,
		User,
	},

	// Add secret here
});

const publicPath = express.static(
	path.join(__dirname, "..", "..", "client", "dist")
);
const indexPath = path.join(__dirname, "..", "..", "client", "dist/index.html");

server.express.use(publicPath);
server.express.use("*", (req, res) => {
	res.sendFile(indexPath);
});

// TODO: remove - for testing purposes
prisma.query
	.users(null, "{id name email}")
	.then(response => console.log(response))
	.catch(error => console.log(error));

server.start(options);
