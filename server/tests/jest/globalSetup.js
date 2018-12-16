require("babel-register");
require("@babel/polyfill/noConflict");

const server = require("../../src/yogaServer").default;

module.exports = async () => {
	global.httpServer = await server.start({ port: 4000 });
};
