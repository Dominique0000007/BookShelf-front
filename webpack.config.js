const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
entry: './index.web.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
module: {
    rules: [
    {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        },
    },
    ],
},
plugins: [
    new HtmlWebpackPlugin({
    template: './public/index.html',
    }),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
],
resolve: {
    alias: {'react-native$': 'react-native-web',},
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
},
devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: true,
    open: true,
},
};