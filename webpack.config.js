const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Make sure this points to your entry file
  output: {
    filename: "main.js", // This should generate main.js in the dist folder
    path: path.resolve(__dirname, "dist"), // Specify output directory
  },
  devServer: {
    static: "./dist", // Serve files from dist
    open: true, // Open the browser automatically
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Ensure this points to your HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // CSS processing
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Image handling
      },
    ],
  },
};
