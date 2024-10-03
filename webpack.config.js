const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set the mode to development for better debugging
  entry: "./src/index.js", // Entry point for the JavaScript file
  output: {
    filename: "main.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before every build
  },
  devServer: {
    static: "./dist", // Serve files from the dist directory
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
    port: 8080, // Specify the port for the server
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Template HTML file to use
      filename: "index.html", // Output HTML file name
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Match all .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader to process CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image file extensions
        type: "asset/resource", // Handle images as separate files in the output
      },
    ],
  },
};
