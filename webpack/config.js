var path    = require('path'),
    root    = path.join(__dirname, '../'),
    src     = path.join(root, 'src'),
    webpack = require('webpack'),
    host    = require('./host.js');


module.exports = {
  entry: [
    'webpack-dev-server/client?' + host.full,
    'webpack/hot/only-dev-server',
    path.join(src, 'module.js')
  ],
  output: {
    path: path.join(root, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.styl'],
    root: path.join(root, 'src')
    /*moduleDirectories: [
      path.join(root, 'node_modules'),
      path.join(root, 'src'),
      path.join(root, 'src', 'stores')

    ]*/
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader?stage=0'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  }
}