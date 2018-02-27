var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;
Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        var normalizedTestModule = file;
        allTestFiles.push(normalizedTestModule);
    }
});
var libPath = "";
var rtPath = "../node_modules/";
var requireConfig = {
    baseUrl: '/base/js',
    paths: {
        'jquery': rtPath + 'jquery/dist/jquery.min',
        'angular': rtPath + 'angular/angular.min',
        'angular-route': rtPath + 'angular-ui-router/release/angular-ui-router.min',
        'domReady': rtPath + 'requirejs-domready/domReady',
        'asyncLoader': rtPath + 'angular-async-loader/angular-async-loader',
        'angularMocks': rtPath + 'angular-mocks/angular-mocks',
        'bootstrap': 'bootstrap',
        'app': "app",
        'router': "router"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'asyncLoader': {
            exports: 'asyncLoader'
        },
        'angularMocks': {
            deps: ['angular'],
            exports: 'angular.mock'
        }
    },
    deps: allTestFiles,
    callback: window.__karma__.start
};
require.config(requireConfig);


