const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    serviceWorker: path.resolve(__dirname, "../chrome_src/serviceWorker.ts"),
    contentScript: path.resolve(__dirname, "../chrome_src/contentScript.ts"),
    popup: path.resolve(__dirname, "../chrome_src/popup.tsx"),
    options: path.resolve(__dirname, "../chrome_src/options.tsx"),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500, // 小于8KB的图片会被转换成base64编码
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../chrome_static"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../chrome_src/popup.html"),
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../chrome_src/options.html"),
      filename: "options.html",
      chunks: ["options"],
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../chrome_static"),
          to: path.resolve(__dirname, "../dist"),
        },
      ],
    }),
  ],
};
