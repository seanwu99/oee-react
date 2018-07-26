var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
    entry: {
        main: APP_DIR + '/index.js'
    },
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    module: {
        rules: [
            {
                test: /(\.css)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015']
                    }
                }]
            }
        ],

    }
};

module.exports = config;