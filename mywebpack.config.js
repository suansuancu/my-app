/**
 * Created by dell on 2017/8/29.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = function (evn) {
	return {
		// devtool: 'eval-source-map',
		entry: {
			main: './src/index.js'
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './dist')
		},
		module: {
			rules:[
				{
					test:/\.css$/,
					use:[{
						loader: 'css-loader',
					},{
						loader: 'style-loader',
					},]
				},
				{
					test:/\.(jpe?g|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
					use:{
						loader: 'file-loader'
					}
				},
				{
					test: /\.svg$/,
					use: [
						{loader: 'svg-url-loader?limit=1&name=assets/images/[hash].[ext]'}
					]
				},
				{
					test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
					use: 'url-loader?limit=10000&mimetype=application/font-woff&outputPath=assets/font/'
				},
				{
					test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
					use: 'url-loader?limit=10000&mimetype=application/octet-stream&outputPath=assets/font/'
				},
				{
					test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
					use: 'file-loader?outputPath=assets/font/'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},

				{
					test: /\.jsx$/,
					exclude: /^node_modules$/,
					use: [
						{loader: 'jsx-loader'},
						{loader: 'babel-loader'}
					]
				}
			],
		},

		plugins: [
			new LoaderOptionsPlugin({
				options: {
					postcss: function () {
						return [autoprefixer];
					},
					devServer: {
						contentBase: "./public",
						colors: true,
						historyApiFallback: true,
						inline: true
					}
				}
			}),
			new webpack.HtmlWebpackPlugin({
				title: 'react + webpack',
				template: './public/index.html',
			}),
		]

	}

};
