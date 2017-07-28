const webpack = require('webpack'),
    path = require('path');

const SRC_DIR = './src',
    DIST_DIR = './public';

module.exports = {
    context: path.join(__dirname, SRC_DIR),
    devtool: 'inline-source-map',
    target: 'web',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/index.js',
        chunkFilename: 'js/index.js',
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        hot: true
    },

    module: {},

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}