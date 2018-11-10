const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack")

const outputDirectory = "dist";

const DOMAIN_ADDRESS = process.env.DOMAIN_ADDRESS || '"http://188.130.155.81:8120"'

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      title: "Activity Dashboard",
      hash: true,
      template: "public/index.html"
    }),
    new webpack.DefinePlugin({
      DOMAIN_ADDRESS: DOMAIN_ADDRESS
    })
  ]
};
