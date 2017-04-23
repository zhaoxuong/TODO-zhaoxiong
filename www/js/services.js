angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			var i;
			for(i=tasks.length-1;i>0;i--)
				tasks[i]=tasks[i-1];
			tasks[0]=task;
			window.localStorage['tasks']=angular.toJson(tasks);
		}

	}
})
