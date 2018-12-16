import path from "path";
import express from "express";
import server from "./yogaServer.js";

// Variable port for Heroku or local development
const port = process.env.PORT || 8000;

// GraphQL Yoga server options
const options = {
	port,
	endpoint: "/api/graphql",
	playground: "/api/playground",
	subscriptions: "/api/subscriptions",
};

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

server.start(options);
