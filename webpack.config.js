const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    application: './source/javascripts/application.js',
    styles: './source/stylesheets/styles.css',
  },
  //resolve: {
    //root: __dirname + '/source/javascripts',
  //},
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
