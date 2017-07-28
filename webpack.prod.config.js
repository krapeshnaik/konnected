const webpack = require('webpack'),
    path = require('path');

const SRC_DIR = './src',
    DIST_DIR = './public';

module.exports = {
    context: path.join(__dirname, SRC_DIR),
    target: 'web',

    entry: [
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
    },

    module: {},

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}