const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/output.js',
   },

  plugins: [

    new HtmlWebpackPlugin({

      title: 'Development',

    }),

  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
