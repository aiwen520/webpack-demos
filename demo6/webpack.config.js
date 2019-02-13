module.exports={
    entry:'./main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            //use: ['style-loader','css-loader?modules'],
            use: [
              {
                loader: 'style-loader'
              },
              {
                 loader: 'css-loader',
                 options: {
                   modules: true
                 }
              }
            ]
          },
          // {
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: 'es2015'
          //     }
          //   }
          // }
        ]
      }
}