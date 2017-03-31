module.exports = {
	entry: ['./app/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js",
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				loaders: ['shebang-loader', 'babel-loader']
			}
		],
		noParse: ['ws']
	},
	externals: ['ws']
}
