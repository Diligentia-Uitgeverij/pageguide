const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  entry: {
		pageguide: './src/PageGuide.ts',
		example: './src/example/example.ts',
	},
	
	devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000,
    hot: true,
    host: 'localhost'
  },
  
	output: {
		path: path.resolve(__dirname, 'dev'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
	},

  // Source maps support ('inline-source-map' also works)
  devtool: 'inline-source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{ test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
			{ test: /\.html?$/, loader: 'html-loader' },
    ]
  },
  plugins: [
		new HtmlWebpackPlugin(),
		new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};