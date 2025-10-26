const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/setupTests.js',
      'src/services/*.test.js',
      'src/data/*.test.js',
      'src/**/*.test.js',
      'src/**/*.unit.test.js'
    ],
    preprocessors: {
      'src/setupTests.js': ['webpack'],
      'src/services/*.test.js': ['webpack', 'coverage'],
      'src/data/*.test.js': ['webpack', 'coverage'],
      'src/**/*.test.js': ['webpack', 'coverage'],
      'src/**/*.unit.test.js': ['webpack', 'coverage']
    },
    webpack: {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: ['null-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
},
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', dir: 'coverage/html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
