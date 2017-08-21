import path from 'path'
import webpack from 'webpack'

const isProd = process.env.NODE_ENV === 'production'

export default {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/dist/' : 'http://0.0.0.0:3000/dist/',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'] },
      { test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
