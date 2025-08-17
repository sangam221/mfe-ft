const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "/app/dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/ft/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ft",
      filename: "remoteEntry.js",
      exposes: {
        "./FTApp": "./src/App", // Adjust as needed
      },
      shared: packageJson.dependencies,
    }),
  ],
});