(function() {
    var libPath = "";
    var rtPath = "../node_modules/";
    var requireConfig = {
        basePath: './',
        paths: {
            'jquery': rtPath + 'jquery/dist/jquery.min',
            'angular': rtPath + 'angular/angular.min',
            'angular-route': rtPath + 'angular-ui-router/release/angular-ui-router.min',
            'domReady': rtPath + 'requirejs-domready/domReady',
            'asyncLoader': rtPath + 'angular-async-loader/angular-async-loader',
            'bootstrap': "bootstrap",
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
            }
        },
        deps: ['bootstrap'],
        urlArgs: "bust=" + (new Date()).getTime() //防止读取缓存，调试用
    };
    var ok = true;
    var appInit = function() {
        if (ok) {
            require.config(requireConfig);
        } else {
            setTimeout(appInit, 50);
        }
    }
    appInit();
})();