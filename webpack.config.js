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
				loader: "babel-loader"
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				loaders: ['shebang', 'babel']
			}
		],
		noParse: ['ws']
	},
	externals: ['ws']
}
