/**
 * Created by chenshilong on 2017/6/8.
 */
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.styl$/,
                loader:'style-loader!css-loader!stylus-loader'
            },
            {
                test:/\.sass$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.pug$/,
                loader:'pug-loader'
            }
        ]
    },
    devServer:{
        contentBase:"./",
        colors:true,
        historyApiFallback:true,
        inline:true
    }
}