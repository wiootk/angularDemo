// define(['./module', 'jquery'], function(controllers, $) {
//     controllers.controller('controller1', ['$scope', function(scope) {
//         //控制器的具体js代码
//         scope.str = 'controller1';
//     }])
// })


define(['app', 'jquery'], function(app, $) {
    app.controller('controller1', ['$scope', function(scope) {      
        scope.str = 'controller1';
    }])
})

// define(['app', 'jquery'], function(app, $) {
//     app.register.controller('controller1', ['$scope', function(scope) {
//         //控制器的具体js代码
//         scope.str = 'controller1';
//     }])
// })