const webpack = require("webpack");

module.exports = {
  watch: true,
  entry: {
    global: "./global.js",
    account: "./account.js",
    product: "./product.js",
    addresses: "./addresses.js",
    collection: "./collection.js",
  },
  output: {
    filename: "[name].min.js",
    path: __dirname,
  },
  plugins: [
    new webpack.ProvidePlugin({ "window.decomp": "poly-decomp" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      rivets: "rivets",
    }),
  ],
};