const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
require("@babel/polyfill");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	entry: { app: ["@babel/polyfill", "./src/index.js"] },
	output: {
		path: path.join(__dirname + "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: "/node_modules/",
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					process.env.NODE_ENV === "production"
						? MiniCssExtractPlugin.loader
						: "style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		})
	]
};
