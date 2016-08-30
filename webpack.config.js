var path = require('path');
var webpack = require('webpack');

// PLUGINS
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var config = {
	cache: true,
	debug: true,
	devtool: 'eval',
	entry: {
		// example: 'app' : 'PATH TO APP FILE',
		vendor: './src/vendor.js',
		app : './src/app.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].js'
	},
	plugins: [
		// new webpack.ProvidePlugin({}),
		new CommonsPlugin({
			name: 'common.js',
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/],
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
}

module.exports = config;