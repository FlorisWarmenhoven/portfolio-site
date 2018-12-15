// Injects .env files into process.env
require("dotenv").config({ silent: true });

require("babel-register")({
	presets: ["env"],
});

// Import the rest of our application.
module.exports = require("./src/server.js");
