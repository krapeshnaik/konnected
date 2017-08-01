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
            'webpack-dev-server/client?http://localhost:8082',
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
            'JSRoot': JS_ROOT,
            'SASSRoot': SASS_ROOT,
            'ImgRoot': IMG_ROOT
        }
    },

    devServer: {
        host: 'localhost',
        port: 8082,
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
            FireBaseAuthDomain: JSON.stringify('http://localhost:8082'),
            FireBaseDatabase: JSON.stringify('https://konnected-e015d.firebaseio.com/'),
            FCMSenderId: JSON.stringify('1044398055065')
        })
    ]
}