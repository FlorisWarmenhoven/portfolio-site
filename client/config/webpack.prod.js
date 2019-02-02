const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	context: path.resolve(__dirname, "../src"),
	entry: ["./index.tsx"],
	output: {
		filename: "bundle.js",
		// the output bundle
		path: path.resolve(__dirname, "../dist"),
	},

	resolve: {
		// Add resolvable extensions.
		extensions: [".mjs", ".ts", ".tsx", ".js", ".json"],
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
				exclude: [/node_modules/, /dist/],
			},

			// Load in CSS
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
			},
		],
	},
	plugins: [
		// inject <script> in html file.
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../src/index.html"),
		}),
		new webpack.EnvironmentPlugin(["NODE_ENV"]),
	],
};
