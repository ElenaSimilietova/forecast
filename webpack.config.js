var path = require('path');

var config = {
	context: path.join(__dirname, 'app'), // исходная директория
	entry: {
		app: './app.js',
		vendors: './vendors.js'
	},
	//entry: './app', // файл для сборки, если несколько - указываем hash (entry name => filename)
	output: {
		path: path.join(__dirname, 'dist'), // выходная директория
		filename: 'bundle.js',
        publicPath: "/dist/"
	},
	module: {
        loaders: [
           {
                test: /\.js?/,
                exclude: /(node_modules|\.tmp|test)/,
                loader: 'ng-annotate-loader!babel-loader?presets=es2015'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file'}
        ]
    }
};

module.exports = config;