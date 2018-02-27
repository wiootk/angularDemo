define(["app"], function(app) {
    return app.run(['$rootScope', '$state', '$stateParams',
            function(root, state, stateParams) {
                root.$state = state;
                root.$stateParams = stateParams
            }
        ]).config(['$controllerProvider','$compileProvider','$filterProvider','$provide',function(controllerProvider,compileProvider,filterProvider,provide){
    app.register = {
       controller : controllerProvider.register,
       directive: compileProvider.directive,
       filter: compileProvider.register,
       service: provide.service
    };
}])})