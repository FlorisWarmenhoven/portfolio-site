import path from "path";
import express from "express";
import server from "./yogaServer.js";
import compression from "compression";
import { authenticateUser } from "./utils/authenticateUser.js";
import cors from "cors";
import cookieParser from "cookie-parser";
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

server.express.use(compression());

// Serve static files from client dist folder
server.express.use(publicPath);

// Allow CORS, this could be disabled in production
// TODO: Remove CORS in production
server.express.use(cors());

server.express.use(cookieParser());

server.express.get("/api/authenticate", async (req, res, next) => {
	try {
		const isAuthenticated = await authenticateUser(req);
		res.send(isAuthenticated);
	} catch (error) {
		res.status(401).send("Token was incorrect");
	}
});

// server.express.get("/dashboard", async (req, res, next) => {
// 	console.log(req.headers);
// 	try {
// 		const isAuthenticated = authenticateUser(req);
// 		res.send(isAuthenticated);
// 	} catch (err) {
// 		res.status(401).send("Token was incorrect.");
// 	}
// });

server.express.all("/*", (req, res, next) => {
	if (req.path === "/api/playground" || req.path === "/api/graphql") {
		return next();
	}

	res.sendFile(indexPath);
});

server.start(options);
