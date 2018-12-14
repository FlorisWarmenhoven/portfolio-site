const path = require("path");
const express = require("express");
const app = express();

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "dist")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log("Server is running on http://localhost:" + port);
});
