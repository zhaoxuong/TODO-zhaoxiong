angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
	$scope.complate=function(task){
	task.flag=false;
	var i,k;
	for(i=0;i<$scope.tasks.length;i++){
		if($scope.tasks[i]==task)
			k=i;
	}

	for(i=k;i<$scope.tasks.length-1;i++){
		$scope.tasks[i]=$scope.tasks[i+1];
	}
	$scope.tasks[$scope.tasks.length-1]=task;
	window.localStorage['tasks']=angular.toJson($scope.tasks);

};
});
