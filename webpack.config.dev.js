var webpack = require('webpack');
var ExtractTextPlugin =  require('extract-text-webpack-plugin');
var path= require('path');
var HtmlPlugin = require('webpack-html-plugin');
// var HappyPack = require('happypack');
// var os = require('os');
// var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

//var DashboardPlugin = require('webpack-dashboard/plugin');
//var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var webpackConfig = {
  entry: {
    main: [
      'react-hot-loader/patch',
      './src/main.js'
    ],
    // WeSite:[
    //     './src/app_modules/WeSite/index.js'
    // ],
	  vendors : [ 'antd', 'isomorphic-fetch', 'react', 'react-dom', 'react-redux', 'react-router', 'redux','redux-logger','redux-thunk','moment','lodash','immutable']
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
    host: "0.0.0.0",
//    contentBase: ".",
    publicPath: path.resolve(__dirname,"/dist"),
    stats: {
      cached: false,
      colors: true
    },
    proxy : {
    //   "*":{
    //     changeOrigin: true,
    //     target: "http://192.168.1.75:9000",
    //  },
     "/code":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000",
     },
     "/userResource":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000",
     },
     "/interview":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000",
     },
     "/schedule":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000",
      },
      "/messageSend":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/login":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/logout":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/static":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/accountOperate":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/job":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/callrecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/resume":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/search":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/user":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/company":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/authRole":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/organizationGroup":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/reciveMailbox":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/template":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/field":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sincerityLibrary":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/channel":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
			"/member":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/sysSupportChannel":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/talentNew":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/dictionary":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/jobNew":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/resumeStoreRules":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/report":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/interviewPlan":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/ResumeWaitAllot":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/resumeLibrary":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/logResumeOperateRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/offer":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/fileUpload":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/interviewFeedback":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/registration":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/entry":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/reportCallRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/reportRemark":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
			},
			"/talentInfo":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sysSetOfferApproval":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sysSetShare":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sysPositionLevel":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sysSetInterpolateAward":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/logUserOperate":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/sysInterviewFeedbackTemplate":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/memberInterpolate":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/email":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/memberAwardRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      "/smsRecordInfo":{
        changeOrigin: true,
        target: "http://192.168.1.75:9000"
      },
      
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
    new webpack.DefinePlugin({
        'OS':'desktop',
        'process.env.NODE_ENV': JSON.stringify('development'),
        'APP_VERSION':JSON.stringify(process.env.npm_package_version),
        'APP_SERVER':JSON.stringify(process.env.npm_package_config_serverAddress)
    }),
    // new HappyPack({
    //   id: 'happybabel',
    //   loaders: ['babel-loader'],
    //   threadPool: happyThreadPool,
    //   cache: true,
    //   verbose: true
    // })
  ],
//  devtool: 'source-map',
  module: {
    rules: [{
    //  test: /\.js$/,
    //  include: [path.resolve('src')],
    //  exclude: /node_modules/,
    //  loader: 'happypack/loader?id=happybabel'
    // },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },{
      test: /\.text$/,
      loader: 'raw-loader'
    },{
      test: /\.css$/,
      // exclude: /node_modules/,
      use: [{
           loader: "style-loader"
       }, {
           // loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
           loader: "css-loader"
       }, ]
    },{
      test: /\.less$/,
      // exclude: /node_modules/,
      use: [{
          loader: "style-loader",
          // exclude: /node_modules/,
       }, {
           // loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
          loader: "css-loader",
          // exclude: /node_modules/,
       }, {
          // exclude: /node_modules/,
          loader: "less-loader", options: {
            strictMath: false,
            noIeCompat: true
          }
       }]
    },{
		 test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
		 use: "file-loader"
    },{
　　　test: /\.(png|jpg)$/,
　　　use: 'url-loader?limit=528192'
    }]
  },
  externals: {
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    "alias": {
      // 'react': 'nervjs',
      // 'react-dom': 'nervjs'
      'react':'react/umd/react.production.min',
      'react-dom':'react-dom/umd/react-dom.production.min',
      'react/lib/ReactMount':'react-dom',
    },
  }
};


module.exports = webpackConfig;
