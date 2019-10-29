var webpack=require('webpack');
var devFlagPlugin= new webpack.DefinePlugin({
    _DEV_=JSON.stringify(JSON.parse(process.env.DEBUG || 'FALSE'))
})

module.exports={
    entry:'./index.js',
    output:{
        filename:'bundle.js'
    },
    plugins:[devFlagPlugin]
}