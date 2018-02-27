define(['app'],function(app){
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
})