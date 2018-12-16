require("babel-register");
require("@babel/polyfill/noConflict");

const server = require("../../src/yogaServer").default;

// TODO: Move port to env file
module.exports = async () => {
	global.httpServer = await server.start({ port: 8000 });
};
