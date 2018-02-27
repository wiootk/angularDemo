define(["app"], function(app) {
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
})