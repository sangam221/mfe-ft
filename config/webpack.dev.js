const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3002/",
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