// docs: webpack.js.org
const path = require('path'); //from Node
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //Node
const webpack = require('webpack');
// entry -> output
console.log("WEBPACK PATH: "+path.join(__dirname, 'public')); //path for output

// dotenv lib
process.env.NODE_ENV  = process.env.NODE_ENV || 'development'; //set by cross-env in test, or heroku in prod

console.log("process.env.NODE_ENV: "+process.env.NODE_ENV);

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'});
}

// function returns object
module.exports = (env) => {
 const isProduction = env === 'production';
 const CSSExtract = new ExtractTextPlugin('styles.css');
 console.log("webpack env: "+env);

 return  {
  entry: ['babel-polyfill','./src/app.js'],
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
    CSSExtract,
    // pass in the envoronment variables
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    })
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
