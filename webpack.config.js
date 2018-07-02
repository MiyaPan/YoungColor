const path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //访问内置的插件

let sourceFolder = [path.resolve(__dirname, './src')];

module.exports = {
    resolve: {
        alias: {
            _apis: path.resolve(__dirname, './src/apis'),
            _pages: path.resolve(__dirname, './src/client/pages'),
            _components: path.resolve(__dirname, './src/client/components')
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: './src/client/pages/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                }),
                include: sourceFolder
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                include: sourceFolder
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.html?$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/client/pages/index.html',
            filename: 'index.html',
            inject: false
        })
    ]
};
