define(['app','angularMocks','jquery','../js/controller/controller1','../js/directive/directive' ], function(app,mocks,jquery) {
    describe('Test Controller', function() {
        describe('controller1', function() {
            var $scope;
            //模拟Application模块并注入依赖
            beforeEach(mocks.module('webapp'));
            //模拟Controller，并且包含 $rootScope 和 $controller
            beforeEach(mocks.inject(function($rootScope, $controller) {
            //创建一个空的 scope
            $scope = $rootScope.$new();
            //声明 Controller并且注入已创建的空的 scope
            $controller('controller1', {$scope: $scope});
            }));
//             beforeEach(inject(function($injector) {    
//                $scope = $injector.get('$rootScope').$new();  
//                $controller = $injector.get('$controller')('controller1', {
//                   '$scope': $scope
//                  });
//              }));
        it('should str is controller1', function() {
            expect($scope.str).toBe('controller1');
            });
        });
    });
     describe('Test Directive', function() {
        describe('dirDemo', function() {
            var $scope,$compile;
            //模拟Application模块并注入依赖
            beforeEach(mocks.module('webapp'));
            beforeEach(mocks.inject(function(_$compile_,_$rootScope_) {
            $scope = _$rootScope_;
            $compile = _$compile_;
            }));
        it('should display the demo text', function () {
      var elt = $compile('<div dir-demo str-demo="\'指令\'"/>'
      )($scope);
      $scope.$digest();
      expect(elt.html()).toContain('指令');
    });
    });
});
// .filter('demo', function() {
//     return function(text,lable) {
//       return text+lable;
//     };
//   });
// describe('Test Filter', function() {
//         describe('filterDemo', function() {
//             var $filter;
//             beforeEach(mocks.module('webapp'));

//             beforeEach(mocks.inject(function(demoFilter) {
//             $filter = demoFilter;
//             }));
//             it('should filter the demo ', function () {
//                 expect($filter("abc"," filter")).toEqual('abc filter');
//             });
//         });
// })






})
