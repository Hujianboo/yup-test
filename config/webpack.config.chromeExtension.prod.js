const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.chromeExtension.js");
module.exports = merge(common, {
  mode: "production",
  devtool: false,
});
