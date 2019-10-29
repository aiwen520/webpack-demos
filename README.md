# webpack-demos
webpack学习小demo

#常见命令
webpack 供开发构建
webpack -p 供生产构建一次
webpack --watch – 连续的增量构建
webpack -d – 包括源地图
webpack --colors – 让内部更好看

#demo1
单入口单输出

#demo2
多入口文件

#demo3
babel-loader(编译转译,如es6转化为es5)babel-loader 是一个将jsx、es6格式的文件转换为js文件的工具

#demo4
css-loader(Webpack允许你在JS文件中包含CSS，然后用CSS-loader来预处理CSS文件。style-loader将样式插入head中的style标签中)
这里需要注意到是，必须使用两个加载器来转换，css-loader 是用来读取cssfile，style-loader是用来将style标签插入到html页面的，不同的loader使用‘！’来连接

#css-loader中各参数配置
css-loader用于将css文件打包到js中, 常常配合style-loader一起使用，将css文件打包并插入到页面中。如下：
{
    test: /\.css$/,
    use: [
        {
            loader: ‘style-loader‘
        },
        {
            loader: ‘css-loader‘,
            options: {
                root: ‘/‘, //修改css中url指向的根目录, 默认值为/, 对于绝对路径, css-loader默认是不会对它进行处理的
                modules: false, //开启css-modules模式, 默认值为flase
                vue提供css作用域特性，每个模块化的页面，都可以单独使用一个绝不重复的样式，使之在不同的页面下，即使有同名样式，也不冲突 

                localIdentName: ‘[name]-[local]-[hash:base64:5]‘, //设置css-modules模式下local类名的命名
                minimize: false, //压缩css代码, 默认false
                camelCase: false, //导出以驼峰化命名的类名, 默认false
                import: true, //禁止或启用@import, 默认true
                url: true, //禁止或启用url, 默认true
                sourceMap: false, //禁止或启用sourceMap, 默认false.
                Webpack打包生成的.map后缀文件，使得我们的开发调试更加方便，它能帮助我们链接到断点对应的源代码的位置进行调试（//# souceURL），
                importLoaders: 0, //在css-loader前应用的loader的数目, 默认为0
                alias: {} //起别名, 默认{}
            }
        }
    ]
}

#demo5
Image loader ()(url-loader图片解析)

#demo6
css moudles(css作用域,css in js)  未成功读取引入css模块中的类名
*.global.css 普通模式
*.css css module模式

#demo7
UglifyJs Plugin 
Webpack has a plugin system to expand its functions. For example, UglifyJs Plugin will minify output(bundle.js) JS codes.(压缩js代码插件)

#demo8
HTML Webpack Plugin and Open Browser Webpack Plugin 

html-webpack-plugin could create index.html for you, and open-browser-webpack-plugin could open a new browser tab when Webpack loads.

#demo9
HTML Webpack Plugin and Open Browser Webpack Plugin 
多chunks and use template

#demo10
DefinePlugin 设置环境变量 
process.env 获取当前系统环境信息的对象，常规可以用来进一步获取环境变量、用户名等系统信息





