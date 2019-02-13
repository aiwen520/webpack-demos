module.exports={
    entry:'./main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(png|jpg)$/,
　　　　　　 loader: 'url-loader?limit=8192',
            //loader 后面 limit 字段代表图片打包限制，这个限制并不是说超过了就不能打包，
            //而是指当图片大小小于限制时会自动转成 base64 码引用。
            //上例中大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用。
            // use: [
            //   {
            //     loader: 'url-loader',
            //     options: {
            //       limit: 8192
            //     }
            //   }
            // ]
          }
        ]
      }
}