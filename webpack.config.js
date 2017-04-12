/**
 * Created by Beck on 4/12/2017.
 */

var path = require('path');
var webpack = require('webpack');
/*var pathChunkPlugin = require('path-chunk-webpack-plugin');//分片路径管理插件*/

module.exports = {
    entry:{
        'js/webpack-test':'./js/webpack-test.js',
        'js/webpack-test2':'./js/webpack-test2.js',
        'js/chunk-test':'./js/chunk-test.js',
        'js/main1':'./js/main1.js',
        'js/main2':'./js/main2.js'
    },
    output:{
        filename:'[name]-[hash].js',
        path:path.resolve(__dirname, 'build'),
        chunkFilename:'js/[name]--[chunkhash].js',
        //这里分别用hash和chunkhash，结果不一样
        //filename:'[name]-[chunkhash].js'

    },
    plugins: [
        /*new  webpack.optimize.CommonsChunkPlugin('common.js', ['js/main1', 'js/main2'])*/
        new  webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js', chunks:['js/main1', 'js/main2']}),
        /*new pathChunkPlugin({name: 'vendor',test: 'build'})*/

    ]
};
