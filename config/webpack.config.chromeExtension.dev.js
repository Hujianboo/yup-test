const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.chromeExtension.js");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: ["popup.html", "options.html"],
  },
});
