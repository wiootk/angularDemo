module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            { pattern: 'node_modules/jquery/dist/jquery.min.js', included: false },
            { pattern: 'node_modules/angular/angular.min.js', included: false },
            { pattern: 'node_modules/requirejs-domready/domReady.js', included: false },
            { pattern: 'node_modules/angular-ui-router/release/angular-ui-router.min.js', included: false },
            { pattern: 'node_modules/angular-async-loader/angular-async-loader.js', included: false },
            { pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false },
            { pattern: 'js/**/*.*', included: false, served: true },
            { pattern: 'js/*.*', included: false, served: true },
            { pattern: 'test/*_spec.js', included: false, served: true },
            'test/test-main.js'
        ],
        exclude: [
            './js/main.js',
            './karma.require.config.js'
        ],
        preprocessors: {
            'test/*_spec.js': 'coverage'
        },
        // plugins: ['karma-mocha-reporter','karma-chrome-launcher','karma-jasmine','karma-requirejs'],
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}