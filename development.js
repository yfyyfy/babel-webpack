import path from 'path';
/**/
import HtmlWebpackPlugin from 'html-webpack-plugin';
/**/

const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

export default {
  mode: 'development',
  entry: src + '/index.js',
  devtool: false,

  output: {
    path: dist,
//    publicPath: "/dist/",
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

/**/
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
/**/

/*
  devServer: {
    contentBase: src,
    port: 8080,
    publicPath: "http://localhost:8080/dist/"
  }
*/

};
