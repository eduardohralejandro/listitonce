const path = require('path');
const webpack = require('webpack');
const betterWebpackProgress = require('better-webpack-progress');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip');
const dotenv = require('dotenv');


const isProduction = process.env.NODE_ENV === 'production';


const WEBPACK_PORT = 5000;


dotenv.config();


const basePlugins = [
    new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
        APP_KEY: process.env.APP_KEY,
        APP_ID: process.env.APP_KEY,
    }),
    new HtmlWebpackPlugin({
        filename: isProduction ? '404.html' : 'index.html',
        template: './index.html',
        inject: true,
    }),
    new ProgressPlugin(betterWebpackProgress({
        mode: 'compact',
    })),
];


const devPlugins = [
    ...basePlugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin({
        clearConsole: true,
        compilationSuccessInfo: {
            messages: [
                `The app is running at http://localhost:${WEBPACK_PORT}`,
                `The app is running at http://${ip.address()}:${WEBPACK_PORT}`
            ],
        },
    }),
];

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    stats: 'none',
    entry: {
        app: './app/app.js',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './app'),
            'node_modules',
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.mjs', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist')
    },
    plugins: isProduction ? basePlugins : devPlugins,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-formatter-pretty'),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        port: WEBPACK_PORT,
        inline: true,
        hot: true,
        historyApiFallback: true,
        quiet: true,
        stats: true,
        noInfo: false,
        clientLogLevel: 'none',
        overlay: true,
    }
};