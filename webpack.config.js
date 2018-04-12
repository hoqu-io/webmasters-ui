const path = require('path')

const webpack = require('webpack')

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    path.join(__dirname, 'src', 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'stage-0', 'env', 'react' ],
          plugins: [ 'transform-class-properties' ]
        }
      },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, camelCase: true, modules: true } },
          'postcss-loader'
        ]
      },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=200000' }
    ]
  },
  output: {
    path: path.join(__dirname, 'target', 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src')
    ]
  },
  devServer: {
    contentBase: './static'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
}
