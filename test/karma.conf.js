// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-09-14 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/lodash/dist/lodash.compat.js',
      'bower_components/restangular/dist/restangular.js',
      
      'bower_components/jquery/jquery.js',
      'bower_components/blueimp-tmpl/js/tmpl.js',
      'bower_components/blueimp-load-image/js/load-image.js',
      'bower_components/blueimp-load-image/js/load-image-ios.js',
      'bower_components/blueimp-load-image/js/load-image-orientation.js',
      'bower_components/blueimp-load-image/js/load-image-meta.js',
      'bower_components/blueimp-load-image/js/load-image-exif.js',
      'bower_components/blueimp-load-image/js/load-image-exif-map.js',
      'bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.js',
      'bower_components/jquery-file-upload/js/cors/jquery.postmessage-transport.js',
      'bower_components/jquery-file-upload/js/cors/jquery.xdr-transport.js',
      'bower_components/jquery-file-upload/js/vendor/jquery.ui.widget.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-process.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-validate.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-image.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-audio.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-video.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-ui.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-jquery-ui.js',
      'bower_components/jquery-file-upload/js/jquery.fileupload-angular.js',
      'bower_components/jquery-file-upload/js/jquery.iframe-transport.js',

      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
