const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	context: resolve(__dirname, "src"),
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
		path: resolve(__dirname, "dist"),
		publicPath: "/",
		// necessary for HMR to know where to load the hot update chunks
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "inline-source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"],
	},

	devServer: {
		port: "3000",
		// Change it if other port needs to be used
		hot: true,
		// enable HMR on the server
		noInfo: true,
		quiet: false,
		// minimize the output to terminal.
		contentBase: resolve(__dirname, "src"),
		// match the output path
		publicPath: "/",
		// match the output `publicPath`
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates
		new HtmlWebpackPlugin({ template: resolve(__dirname, "src/index.html") }),
		// inject <script> in html file.
	],
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	// externals: {
	// 	react: "React",
	// 	"react-dom": "ReactDOM",
	// },
};
