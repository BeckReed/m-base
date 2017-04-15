/**
 * Created by HuangZufu on 4/12/2017.
 * [dev] 打包版本暂不压缩方便查看源码
 */

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');//清空编译目录插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将CSS抽取成独立的CSS文件插件
var CompressionWebpackPlugin = require('compression-webpack-plugin');//开启 gzip 压缩
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss')
var postcssAssets=require('postcss-assets');
var extractCSS  = new ExtractTextPlugin({
    filename:  (getPath) => {
        return getPath('style/[name].css').replace('style/js', 'style');
    },
    allChunks: false
});
var extractLESS = new ExtractTextPlugin({
    filename:  (getPath) => {
        return getPath('style/[name].css').replace('style/js', 'style');
    },
    allChunks: false
});
/*var pathChunkPlugin = require('path-chunk-webpack-plugin');//分片路径管理插件*/

module.exports = {
    resolve: {
        alias: {
            zepto: './js/lib/zepto/zepto.js'
        }
    },
    entry: {
        'js/zepto': ['./js/lib/zepto/zepto.js'],//抽取公共的zepto
        'js/index': './js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/dev'),
        publicPath: "../",
        chunkFilename: 'js/[name].js',
    },
    module: {
        loaders: [
            {
                test: require.resolve('./js/lib/zepto/zepto'),//require.resolve() 是 nodejs 用来查找模块位置的方法，返回模块的入口文件
                loader: 'exports-loader?window.Zepto!script-loader'//将zepto作为全局对象进行引入导出  script-loader使zepto共用的只加载一次
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader','postcss-loader'])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract({fallback: "style-loader",use:[ 'css-loader','postcss-loader', 'less-loader' ]}),
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=10240&name=image/[name].[ext]'
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file?name=./fonts/[name].[ext]',
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: require.resolve('./js/lib/zepto/zepto'),
        }),
        new webpack.optimize.CommonsChunkPlugin({name:'js/zepto', filename:'js/zepto.js'}),
        new HtmlWebpackPlugin({
            filename: 'html/index.html',    //生成的文件
            template: 'html/index.html',  //读取的模板文件,这个路径是相对于当前这个配置文件的
            inject: true, // 自动注入
            chunks:['js/index','js/zepto'],
           /* minify: {
                removeComments: true,        //去注释
                collapseWhitespace: true,    //压缩空格
                removeAttributeQuotes: true  //去除属性引用
            },*/
            //必须通过上面的 CommonsChunkPlugin 的依赖关系自动添加 js，css 等
            chunksSortMode: 'dependency'
        }),
        new CleanWebpackPlugin(['build/dev'], {
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin({
            filename:"css/[name].css",
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [precss, autoprefixer({
                        browsers: ['last 2 versions'],
                    }),
                        postcssAssets({
                            relative: true,
                            loadPaths: [path.resolve(__dirname, 'image')],
                        })
                    ];
                }
            }
        }),
        /*new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),*/
        extractCSS,
        extractLESS
    ],
    externals: {
        $: require.resolve('./js/lib/zepto/zepto')
    }
};
