module.exports = {
  bail: true, //遇上 test feature, 则Stop running test, 默认值是false
  cacheDirectory: './node_modules/.cache', //测试缓存数据的存储位置
  testEnvironment: 'jsdom', //default brower-like enviroment, 如果你搭建了一个node service node-like enviroment
  coverageThreshold: { //测试覆盖率, 阈值不满足，就返回测试失败
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coveragePathIgnorePatterns: [ //该路径下的测试，忽略在测试覆盖率上
    'build',
    '<rootDir>/src/shared/libs/url/',
  ],
  testRegex: '__tests__/.*\\.js?$', //要测试的文件目录及后缀
  testPathIgnorePatterns: [ //忽略该路径的文件测试
    '<rootDir>/node_modules/(?!lodash-es)',
    '<rootDir>/build/',
    '<rootDir>/client',
    '<rootDir>/dist',
    '<rootDir>/scripts/',
    '<rootDir>/api/',
    '<rootDir>/test/setup.js',
    '__mocks__',

  ],
  moduleFileExtensions: ['', 'json', 'js', 'jsx', 'less'], //测试模块中用到的文件的后缀名配置
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {  //与测试无关的资源文件同意mock 掉，这样在import 的时候就不会真的引入这些文件
    '^import?': '<rootDir>/build/jestImportMock.js',
    '\\.(css|less|gif|jpg|jpeg|png)$': '<rootDir>/build/jestStyleMock.js',
  },
//  setupFiles: ['<rootDir>/test/setup.js'], //给每个测试文件添加额外的配置
  transformIgnorePatterns: [ //测试过程不改变满足配置的文件
    '<rootDir>/node_modules/(?!(react-aaui|tempest\\.js)/)',
    'babel-runtime',
  ],
}
