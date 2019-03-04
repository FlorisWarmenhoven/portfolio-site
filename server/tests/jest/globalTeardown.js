import "@babel/register";
import "@babel/polyfill/noConflict";

module.exports = async () => {
	await global.httpServer.close();
};
