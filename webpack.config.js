/**
 * Created by Beck on 4/12/2017.
 */

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');//清空编译目录插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将CSS抽取成独立的CSS文件插件
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');//压缩插件适用css、js

// multiple extract instances
/*var setCssBuildPath=function getPath(path){
    return path.replace('style/js','style');
};*/
var extractCSS  = new ExtractTextPlugin({
        filename:  (getPath) => {
        return getPath('style/[name].css').replace('style/js', 'style');
},
allChunks: false
});
var extractLESS = new ExtractTextPlugin({filename:'style/[name].less'});
/*var pathChunkPlugin = require('path-chunk-webpack-plugin');//分片路径管理插件*/

/*
 * 1.LESS转换成CSS 压缩并合并
 * 2.JS压缩合并
 * 3.export zetpo/jquery
 * */

module.exports = {
    resolve: {
        alias: {
            zepto: './js/zepto/zepto.js'
        }
    },
   /* entry: [
        './js/webpack-test.js',
        './js/webpack-test2.js',
        './js/chunk-test.js',
        './js/main1.js',
        './js/main2.js',
        path.join(__dirname, 'src/index.js')
    ],*/
    entry: {
        'js/webpack-test': './js/webpack-test.js',
        'js/webpack-test2': './js/webpack-test2.js',
        'js/chunk-test': './js/chunk-test.js',
        'js/main1': './js/main1.js',
        'js/main2': './js/main2.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'build/dev'),
        chunkFilename: 'js/[name]--[chunkhash].js',
        //这里分别用hash和chunkhash，结果不一样
        //filename:'[name]-[chunkhash].js'

    },
    module: {
        loaders: [
            {
                test: require.resolve('./js/lib/zepto/zepto'),//require.resolve() 是 nodejs 用来查找模块位置的方法，返回模块的入口文件
                loader: 'exports-loader?window.Zepto!script-loader'
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader'])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },
            /*{
                test : /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader', 'less-loader']
                })
            },*/

        ]
    },
    plugins: [
        /*new  webpack.optimize.CommonsChunkPlugin('common.js', ['js/main1', 'js/main2'])*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/common.js',
            chunks: ['js/main1', 'js/main2']
        }),
        new webpack.ProvidePlugin({
            $: require.resolve('./js/lib/zepto/zepto'),
            zepto: require.resolve('./js/lib/zepto/zepto')
        }),
        new CleanWebpackPlugin(['build/dev'], {
            verbose: true,
            dry: false,
            /*exclude: ['shared.js']*/
        }),
        new ExtractTextPlugin({
            filename:"css/[name].css",
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
           /* compress: {
                warnings: false
            }*/
        }),
        extractCSS,
        extractLESS,
        new ExtractTextPlugin({
                filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
},
allChunks: true
})
        /*new pathChunkPlugin({name: 'vendor',test: 'build'})*/

    ],
    externals: {
        $: require.resolve('./js/lib/zepto/zepto')
    }
};
