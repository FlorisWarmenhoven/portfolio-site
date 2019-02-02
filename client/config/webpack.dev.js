const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	mode: "development",
	context: path.resolve(__dirname, "..", "src"),
	entry: [
		"webpack-dev-server/client?http://localhost:3000",
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint
		"webpack/hot/only-dev-server",
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates
		"./index.tsx",
		// the entry point of our app
	],
	output: {
		filename: "hotloader.js",
		// the output bundle
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
		// necessary for HMR to know where to load the hot update chunks
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "cheap-module-eval-source-map",

	resolve: {
		// Add resolvable extensions.
		extensions: [".mjs", ".ts", ".tsx", ".js", ".json"],
	},

	devServer: {
		// Change it if other port needs to be used
		port: "3000",
		// enable HMR on the server
		hot: true,
		// minimize the output to terminal.
		noInfo: true,
		quiet: false,
		// match the output path
		contentBase: path.resolve(__dirname, "..", "src"),
		// match the output `publicPath`
		publicPath: "/",
		// Compresses all files server to gzip format
		compress: true,
		// Allows site to use URLs referring to other server locations
		disableHostCheck: true,
		// Will direct all 404s to the index.html
		historyApiFallback: true,
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				use: {
					loader: "awesome-typescript-loader",
					// transpileOnly removes typechecking and will not output declaration files
					// this vastly increases build times.
					// We add in type-checking through Fork TS Checker Webpack Plugin which starts the TS type checker
					// on a separate process.
					options: { transpileOnly: true, experimentalWatchApi: true },
				},
				exclude: /node_modules/,
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				use: { loader: "source-map-loader" },
				exclude: /node_modules/,
			},

			// Load in CSS
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			// Loads in .png, .jpg and .gif files
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
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),
		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),
		// inject <script> in html file.
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../src/index.html"),
		}),
		// This plugin starts a TSchecker on a separate process - decreases build times significantly
		new ForkTsCheckerWebpackPlugin({
			tsconfig: "../tsconfig.json",
			tslint: "../tslint.json",
		}),
	],
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
};
