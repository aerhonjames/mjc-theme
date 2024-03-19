const path = require('path');

const wPackConfig = {
	entry: {
		theme: path.resolve(__dirname, 'src/assets/js/theme.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
  mode: 'development'
};

module.exports = wPackConfig;