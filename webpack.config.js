// docs: webpack.js.org
const path = require('path'); //from Node
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //Node
// entry -> output
console.log(path.join(__dirname, 'public')); //path for output

// function returns object
module.exports = (env) => {
 const isProduction = env === 'production';
 const CSSExtract = new ExtractTextPlugin('styles.css');
 console.log("webpack env: "+env);

 return  {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,    //regex, only look at .js files
      exclude: /node_modules/
    },{
      test: /\.s?css$/,  //s is optional, gets css files as well as scss
      use: CSSExtract.extract({
         use: [
           {loader: 'css-loader',
             options: {
               sourceMap: true
             }
           },
           {loader: 'sass-loader',
             options: {
               sourceMap: true
             }
           }
         ]
      })
      //use: [
      //  'style-loader',
      //  'css-loader',
      //  'sass-loader'
      //]  //regex, only look at .css files
    }]
  },
  plugins: [
    CSSExtract
  ],
  devtool: isProduction ? 'source-map' : 'inline-source-map', //'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    //watchContentBase: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true, //client-side routing, 404 returns index.html, for react-router
    publicPath: '/dist/'
  }
 }
};

// loader: use Babel to precompile ES6 & JSX, transform
