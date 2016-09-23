MyModule.directive("myDirective",function(){
	return{
		templateUrl:'abc.html',
		transclude:true,
		controller:function($scope){
			$scope.MyValue = "Mahesh";
		}
	}
})