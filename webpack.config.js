const
    webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

const
    SRC_DIR = './src',
    DIST_DIR = './public',
    JS_ROOT = path.join(__dirname, SRC_DIR, 'js'),
    SASS_ROOT = path.join(__dirname, SRC_DIR, 'sass'),
    IMG_ROOT = path.join(__dirname, SRC_DIR, 'img');

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

    resolve: {
        enforceExtension: false,
        extensions: ['.js'],
        alias: {
            '@root': JS_ROOT,
            '@lib': path.join(JS_ROOT, 'lib'),
            '@util': path.join(JS_ROOT, 'util'),
            '@components': path.join(JS_ROOT, 'components'),
            '@route_handlers': path.join(JS_ROOT, 'route_handlers'),
            '@middlewares': path.join(JS_ROOT, 'middlewares'),
            '@css': SASS_ROOT,
            '@img': IMG_ROOT
        }
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: {
            index: './index.html'
        },
        hot: true
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
        }),

        new webpack.DefinePlugin({
            FireBaseKey: JSON.stringify('AIzaSyCVWVc5T88npxv6CC_gcMxQsndO_WzYHNY'),
            FireBaseAuthDomain: JSON.stringify('http://localhost:8080/'),
            FireBaseDatabase: JSON.stringify('https://konnected-e015d.firebaseio.com/'),
            FireBaseStorage: JSON.stringify('gs://konnected-e015d.appspot.com'),
            FCMSenderId: JSON.stringify('1044398055065')
        })
    ]
}