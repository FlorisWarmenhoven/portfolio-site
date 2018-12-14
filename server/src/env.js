// This file ensures dotenv is loaded before other scripts.
// Useful during development because of nodemon.

import dotenv from "dotenv";
dotenv.config({ silent: true });
