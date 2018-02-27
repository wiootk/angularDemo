/*! angularDemo - v0.1.0 - 2017-12-23*/
// define(["angular", 'angular-route', './controller/mainController', './directive/mainDirective'], function(angular) {
//     return angular.module("webapp", ['ui.router', 'webapp.controllers', 'webapp.directive']);
// })

define(["angular", 'asyncLoader','angular-route', './controller/module', './directive/module'], function(angular,asyncLoader) {
    var app= angular.module("webapp", ['ui.router', 'webapp.controllers', 'webapp.directive']);
 // asyncLoader.configure(app);
return app;
});define(['require', 'angular', 'angular-route', 'jquery', 'app', 'router'], function(require, angular) {
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['webapp']);
    });
});;(function() {
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
})();;define(['app'],function(app){
	app.service("myhttp",function($http,http,errorMessage,$log){
		this.get = function(url, params, success, error){  
		//$http.post(url ,params).success(function(resp){  }).error(function(resp){  })  
		$http.get(http + url ,{data:params})
			.success(function (resp) {
               success && success(resp);    })
			.error(function (resp) {  
			   $log.debug(resp);   });
       };
	})
});define(["app"], function(app) {
    console.log(456,app);
    return app.run(['$rootScope', '$state', '$stateParams',
            function(root, state, stateParams) {
                root.$state = state;
                root.$stateParams = stateParams
            }
        ])

.config(['$controllerProvider','$compileProvider','$filterProvider','$provide',function(controllerProvider,compileProvider,filterProvider,provide){
    app.register = {
       controller : controllerProvider.register,
       directive: compileProvider.directive,
       filter: compileProvider.register,
       service: provide.service
    };
}])

        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$uiViewScrollProvider',
            function(state, urlRouter, location, uiViewScroll) {
                //用于改变state时跳至顶部
                uiViewScroll.useAnchorScroll();
                // 默认进入先重定向
                /*   urlRouter.otherwise('/home');
              state
                    .state('home', {
                        //abstract: true,
                        url: '/home',
                        views: {
                            '': {
                                templateUrl: '../views/home.html'
                            }
                        }
                    })*/

                // // 默认进入先重定向
                // urlRouter.otherwise('/pageTab');   
                // // urlRouter.when("", "/PageTab");
                state.state("test", {
                        url: "/test",
                        //abstract: true,
                        views: {
                            "": { templateUrl: "../views/layout.html" },
                            "nav@test": { templateUrl: "../views/nav.html" }
                        }
                    })
                    .state("test.page", {
                        url: "/page?:id",
                        // templateUrl:"'page3.html'",
                        template: "test page 页",
                        controller: ["$stateParams", function($stateParams) {
                            console.log($stateParams.id); // 1  这里实现传参
                        }],
                        params: { id: null }
                    })
                    /*.state("test.home", {
                        url: "/home",
                        templateUrl:   "../views/home.html"
                    })*/
   /*                 .state("test.home", {url: "/home",
        templateUrl:   "../views/home.html",
        controllerUrl: './controller/controller1',
        // controller: 'controller1',
       // dependencies: ['services/usersService']  
        })*/
        .state("test.home", {
          url: "/home",
          templateUrl:   "../views/home.html",
          resolve: {
           loadCtrl: ["$q", function($q) {
            var deferred = $q.defer();
            require(['./controller/controller1'], function() { 
                deferred.resolve(); });
                return deferred.promise;
                   }] 
                 } 
            }) 
            }
        ])
});// define(['./module', 'jquery'], function(controllers, $) {
//     controllers.controller('controller1', ['$scope', function(scope) {
//         //控制器的具体js代码
//         scope.str = 'controller1';
//     }])
// })


// define(['app', 'jquery'], function(app, $) {
//     app.controller('controller1', ['$scope', function(scope) {      
//         scope.str = 'controller1';
//     }])
// })

define(['app', 'jquery'], function(app, $) {
    app.register.controller('controller1', ['$scope', function(scope) {
        //控制器的具体js代码
        scope.str = 'controller1';
    }])
});define(['./controller1'], function() {});;define(['angular'], function(angular) {
    return angular.module('webapp.controllers', []);
});;define(['./module', 'jquery'], function(directives, $) {
    directives.directive('dirDemo', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            require: '^?accordion',
            scope: {
                str: '=strDemo'
            },
            template: '<div>{{str}} </div>',
            link: function(scope, element, attrs, controller) {

            }
        }
    });
});define(['./directive'], function() {});;define(['angular'], function(angular) {
    return angular.module('webapp.directive', []);
});