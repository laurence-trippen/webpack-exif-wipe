const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackExifWipePlugin = require("webpack-exif-wipe");

module.exports = {
  entry: "./js/main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    watchFiles: ['public/**/*.html'],
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // Videos
      {
        test: /\.(mp4|mov|webm)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new WebpackExifWipePlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
};
