const path = require('path');
const webpack = require('webpack'); 

const libraryName = 'PageGuide';

module.exports = {
	mode: 'production',
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  entry: {
		pageguide: './src/PageGuide.ts',
	},
  
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
	},

  // Add the loader for .ts files.
  module: {
    rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{ test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
    ]
  },
};