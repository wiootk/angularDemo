define(['./module', 'jquery'], function(directives, $) {
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
})