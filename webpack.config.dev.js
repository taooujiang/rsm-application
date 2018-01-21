var webpack = require('webpack');
var ExtractTextPlugin =  require('extract-text-webpack-plugin');
var path= require('path');
var HtmlPlugin = require('webpack-html-plugin');
//var DashboardPlugin = require('webpack-dashboard/plugin');
//var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var webpackConfig = {
  entry: {
    app: [
      './src/app.js'
    ],
    // sound:[
    //     './src/app_modules/Sound/index.js'
    // ],
    // member:[
    //     './src/app_modules/Member/index.js'
    // ],
	  vendors : [ 'antd', 'isomorphic-fetch', 'react', 'react-dom', 'react-redux', 'react-router', 'redux','redux-logger','redux-thunk','moment','g2','lodash','immutable']
  },
  output: {
    path: path.resolve(__dirname,"/dist"),
    publicPath: "dist",
    filename: "[name].bundle.js"
  },
  devServer: {
    hot: true,
    noInfo: false,
    inline: true,
//    contentBase: ".",
    publicPath: path.resolve(__dirname,"/dist"),
    stats: {
      cached: false,
      colors: true
    },
    // proxy : [{
    //   path: "/cust/**/**",
    //   changeOrigin: true,
    //   target: "http://localhost:8082"
    // },{
    //   path: "/auth/**/**",
    //   changeOrigin: true,
    //   target: "http://localhost:8082"
    // }]
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        'OS':'desktop',
        'APP_VERSION':JSON.stringify(process.env.npm_package_version),
        'APP_SERVER':JSON.stringify(process.env.npm_package_config_serverAddress)
    }),
    new HtmlPlugin({
        filename: 'app.html',
        hash: true,
        title: 'App',
        chunks: ['app','vendors']
    }),
    // new HtmlPlugin({
    //     filename: 'sound.html',
    //     hash: true,
    //     title: 'sound',
    //     chunks: ['sound']
    // }),
    // new HtmlPlugin({
    //     filename: 'member.html',
    //     hash: true,
    //     title: 'member',
    //     chunks: ['member']
    // })
  ],
//  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'react-hot-loader'
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },{
      test: /\.less$/,
      use: [{
           loader: "style-loader"
       }, {
           //loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
           loader: "css-loader"
       }, {
           loader: "less-loader", options: {
               strictMath: false,
               noIeCompat: true
           }
       }]
    },{
		 test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
		 use: "file-loader"
    }]
  },
  externals: {
    //'draft-js': true,
    // 'rc-editor-mention':true,
    // 'css-loader':true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    "alias": {
      //'react':'react/umd/react.production.min',
      //'react-dom':'react-dom/umd/react-dom.production.min',
      'react/lib/ReactMount':'react-dom',
      'app-module': path.resolve(__dirname,'./src/app_modules'),
      'app-utils':  path.resolve(__dirname,'./src/Utils'),
      'app-components':  path.resolve(__dirname,'./src/components'),
      'app-mock':  path.resolve(__dirname,'./src/mock'),
    },
  }
};


module.exports = webpackConfig;
