const
    webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

const
    SRC_DIR = './src',
    DIST_DIR = './public',
    JS_ROOT = path.join(__dirname, SRC_DIR, 'js'),
    SASS_ROOT = path.join(__dirname, SRC_DIR, 'sass'),
    IMG_ROOT = path.join(__dirname, SRC_DIR, 'img');

module.exports = {
    context: path.join(__dirname, SRC_DIR),
    target: 'web',

    entry: {
        index: [
            './js/index.js'
        ],
        vendor: [
            './js/libs/director.js'
        ]
    },

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
    },

    resolve: {
        enforceExtension: false,
        extensions: ['.js'],
        alias: {
            '@root': JS_ROOT,
            '@libs': path.join(JS_ROOT, 'libs'),
            '@utils': path.join(JS_ROOT, 'utils'),
            '@components': path.join(JS_ROOT, 'components'),
            '@route_handlers': path.join(JS_ROOT, 'route_handlers'),
            '@middlewares': path.join(JS_ROOT, 'middlewares'),
            '@css': SASS_ROOT,
            '@img': IMG_ROOT
        }
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },

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
        }),

        new webpack.DefinePlugin({
            FireBaseKey: JSON.stringify('AIzaSyCVWVc5T88npxv6CC_gcMxQsndO_WzYHNY'),
            FireBaseAuthDomain: JSON.stringify('https://konnected-e015d.firebaseapp.com/'),
            FireBaseDatabase: JSON.stringify('https://konnected-e015d.firebaseio.com/'),
            FireBaseStorage: JSON.stringify('gs://konnected-e015d.appspot.com'),
            FCMSenderId: JSON.stringify('1044398055065')
        })
    ]
}