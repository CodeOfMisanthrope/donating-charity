import * as path from "node:path";
import rspack from "@rspack/core";
import { defineConfig } from '@rspack/cli';
import HtmlWebpackPlugin from "html-webpack-plugin";
import baseConfig from "./rspack.common.config.js";

const dirname = import.meta.dirname;

const config = defineConfig({
  ...baseConfig,

  devtool: false,

  mode: "production",

  entry: path.resolve(dirname, "src", "index.js"),

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, "public", "index.html"),
    }),
    new rspack.CssExtractRspackPlugin({
      filename: "[name].[contenthash].css"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader,
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'builtin:lightningcss-loader'
          },
        ],
        type: 'javascript/auto',
      },
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin(),
    ],
  }
});

export default config;
