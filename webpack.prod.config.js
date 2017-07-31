const webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

const SRC_DIR = './src',
    DIST_DIR = './public';

module.exports = {
    context: path.join(__dirname, SRC_DIR),
    target: 'web',

    entry: {
        index: [
            './js/index.js'
        ],
        vendor: [
            './js/lib/director.js'
        ]
    },

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
    },

    module: {},

    plugins: [
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