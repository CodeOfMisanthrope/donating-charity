import * as path from "node:path";
import { defineConfig } from '@rspack/cli';
import HtmlWebpackPlugin from "html-webpack-plugin";
import baseConfig from "./rspack.common.config.js";

const dirname = import.meta.dirname;

const devServer = {
  hot: true,
  port: 4040,
  static: path.resolve(dirname, "assets"),
  // static: "assets",
  historyApiFallback: true,
};

const config = defineConfig({
  ...baseConfig,

  devtool: false,

  mode: "development",

  entry: path.resolve(dirname, "src", "index.js"),

  cache: true,

  devServer,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, "public", "index.html"),
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'builtin:lightningcss-loader'
          },
        ],
      },
    ]
  }
});

export default config;
