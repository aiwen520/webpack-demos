var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title:'app',
        filename:'index.html',
        inject:'body',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          'theme-color': '#4285f4'
          // Will generate: <meta name="theme-color" content="#4285f4">
        }

      })
    ]
}