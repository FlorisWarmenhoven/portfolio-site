// Injects .env files into process.env
require("dotenv").config({ silent: true });

require("babel-register")({
	presets: ["env", "es2015", "stage-0"],
});

// Import the rest of our application.
module.exports = require("./src/index.js");
