define(['require', 'angular', 'angular-route', 'jquery', 'app', 'router'], function(require, angular) {
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['webapp']);
    });
});