const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'raw-loader',
      //       options: {}
      //     }
      //   ]
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader'
      // },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
      //,
      // {
      //   test: /\.ttf$/,
      //   use: [
      //     {
      //       loader: 'ttf-loader',
      //       options: {
      //         name: './font/[hash].[ext]',
      //       },
      //     },
      //   ]
      // }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};