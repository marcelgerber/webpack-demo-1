const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
    }),
  ],
};
