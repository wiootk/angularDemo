/*var app = angular.module('myApp', []);
app.controller('ctrl', function($scope) {
    $scope.str = 'hello world';
});
*/
// define(["angular", 'angular-route', './controller/mainController', './directive/mainDirective'], function(angular) {
//     return angular.module("webapp", ['ui.router', 'webapp.controllers', 'webapp.directive']);
// })

define(["angular", 'asyncLoader','angular-route','angularMocks', './controller/module', './directive/module'], function(angular,asyncLoader) {
    var app= angular.module("webapp", ['ui.router','ngMock', 'webapp.controllers', 'webapp.directive']);
 // asyncLoader.configure(app);
return app;
})