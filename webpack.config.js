const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loaders: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false,
            },
            compress: {
                screw_ie8: false,
            },
            output: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);