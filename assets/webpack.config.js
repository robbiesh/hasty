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
};