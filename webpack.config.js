const webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

const SRC_DIR = './src',
    DIST_DIR = './public';

module.exports = {
    context: path.join(__dirname, SRC_DIR),
    devtool: 'inline-source-map',
    target: 'web',

    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './js/index.js'
        ],
        vendor: [
            './js/lib/director.js'
        ]
    },

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: {
            index: './index.html'
        },
        hot: true
    },

    module: {},

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new CleanPlugin(['public'], {
            root: path.join(__dirname, './'),
            exclude: [],
            verbose: true,
            dry: false
        }),

        new HtmlPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: {
                html5: true,
                collapseWhitespace: false,
                removeComments: true,
                minifyCSS: false,
                minifyJS: false
            }
        })
    ]
}