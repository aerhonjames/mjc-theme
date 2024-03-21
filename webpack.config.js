const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// paths used in various placed in webpack config
const paths = {
	src: {
		imgs: './src/assets/images',
		scss: './src/assets/scss',
		fonts: './src/assets/fonts',
		js: './src/assets/js',
		favicon: './src/assets/favicon',
	},
	dist: {
		imgs: './assets/images',
		css: './assets/css',
		fonts: './assets/fonts',
		js: './assets/js',
		favicon: './assets/favicon',
	}
}

const wPackConfig = {
  entry: {
    libs: [paths.src.scss + '/libs.scss'],
    theme: [paths.src.js + '/theme.js', paths.src.scss + '/theme.scss']
  },
  output: {
    filename: paths.dist.js + '/[name].bundle.js'
  },
  target: 'web',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/html')
    },
    port: 3000,
    open: true,
    watchFiles: ['src/**/*'],
  },
	mode: 'development',
  module: {
    rules: [{
      test: /\.(sass|scss|css)$/,
      include: path.resolve(__dirname, paths.src.scss.slice(2)),
      use: [
        {
        loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader'
        }
    ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: paths.dist.css + '/[name].bundle.css'
    })
  ]
};

module.exports = wPackConfig;