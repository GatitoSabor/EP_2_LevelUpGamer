const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/setupTests.js',
      'src/services/*.spec.js',
      'src/data/*.spec.js',
      'src/tests/*.spec.js',
      'src/tests/**/*.spec.js',  // Incluye subcarpetas en tests/
      'src/**/*.spec.js',        // Incluye cualquier *.spec.js en src/
      'src/**/*.spec.jsx'
    ],
    preprocessors: {
      'src/setupTests.js': ['webpack'],
      'src/services/*.spec.js': ['webpack', 'coverage'],
      'src/data/*.spec.js': ['webpack', 'coverage'],
      'src/tests/*.spec.js': ['webpack', 'coverage'],
      'src/tests/**/*.spec.js': ['webpack', 'coverage'],
      'src/**/*.spec.js': ['webpack', 'coverage'],
      'src/**/*.spec.jsx': ['webpack', 'coverage']
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
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
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
