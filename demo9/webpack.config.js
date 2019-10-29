var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
      index:path.resolve(__dirname, './index.js'),
      main:path.resolve(__dirname, './main.js'),
      vendor:path.resolve(__dirname, './vendor.js')
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename:'./app.html',
        inject:'body',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          'theme-color': '#4285f4'
          // Will generate: <meta name="theme-color" content="#4285f4">
        },
        template:'./template.html',
        chunks:['main','vendor']

      })
    ]
}