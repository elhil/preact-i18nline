module.exports = {
  entry: [
    "./i18nline-glue.js",
    "./entry.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader!react-i18nline/webpack-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
};
