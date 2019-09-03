// docs: webpack.js.org
const path = require('path'); //from Node
// entry -> output
console.log(path.join(__dirname, 'public')); //path for output

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,    //regex, only look at .js files
      exclude: /node_modules/
    },{
      test: /\.s?css$/,  //s is optional, gets css files as well as scss
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]  //regex, only look at .css files
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    //watchContentBase: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true //client-side routing, 404 returns index.html, for react-router
  }
};

// loader: use Babel to precompile ES6 & JSX, transform
