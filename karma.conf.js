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
      'src/data/*.test.js': ['webpack', 'coverage']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            // Para imágenes: todas a null-loader (¡deja solo esta para imágenes!)
            test: /\.(jpg|jpeg|png|gif|svg)$/i,
            use: ['null-loader']
          },
          {
            // Babel para JS/JSX
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      }
      // ¡No pongas aquí asset/resource ni file-loader para imágenes!
    },
    webpackMiddleware: {
      stats: 'errors-only'
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
