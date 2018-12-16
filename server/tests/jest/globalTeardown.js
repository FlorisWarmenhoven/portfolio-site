require("babel-register");
require("@babel/polyfill/noConflict");

module.exports = async () => {
	await global.httpServer.close();
};
