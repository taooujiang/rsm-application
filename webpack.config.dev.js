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
    //     target: "http://192.168.1.75:8082",
    //  },
     "/code":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082",
     },
     "/userResource":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082",
     },
     "/interview":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082",
     },
     "/schedule":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082",
      },
      "/messageSend":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/login":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/logout":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/static":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/accountOperate":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/job":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/callrecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/resume":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/search":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/user":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/company":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/authRole":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/organizationGroup":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/reciveMailbox":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/template":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/field":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sincerityLibrary":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/channel":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
			"/member":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/sysSupportChannel":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/talentNew":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/dictionary":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/jobNew":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/resumeStoreRules":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/report":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/option":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/interviewPlan":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/ResumeWaitAllot":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/resumeLibrary":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/logResumeOperateRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/offer":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/fileUpload":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/interviewFeedback":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/registration":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/entry":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/reportCallRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/reportRemark":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
			},
			"/talentInfo":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sysSetOfferApproval":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sysSetShare":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sysPositionLevel":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sysSetInterpolateAward":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/logUserOperate":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/sysInterviewFeedbackTemplate":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/memberInterpolate":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/email":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/memberAwardRecord":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/smsRecordInfo":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/srCompany":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/graduates":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
      },
      "/inviteInfo":{
        changeOrigin: true,
        target: "http://192.168.1.75:8082"
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
