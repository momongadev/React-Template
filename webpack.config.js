const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./client/src/index.tsx",
  ],
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.join(__dirname, "client/public", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR plugin
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
