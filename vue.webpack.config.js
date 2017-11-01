const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');


module.exports = {
    entry: './vue/src/main.js',
    output: {
        path: Path.resolve('vue', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                importLoaders:1,
                                //localIdentName:'[local]_[hash:base64:5]',
                                localIdentName:'[local]',
                                sourceMap: true,
                            },
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap: true,
                            },
                        },
                    ],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './vue/src/index.css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: './vue/src/index.html',
        }),
    ],
};
