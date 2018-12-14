const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/test", (req, res) => {
	res.send(__dirname);
});

app.get("*", (req, res) => {
	res.sendFile(__dirname, "client/dist", "index.html");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log("Server is running on http://localhost:" + port);
});
