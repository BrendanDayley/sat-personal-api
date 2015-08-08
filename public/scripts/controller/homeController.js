'use strict';

app.controller('homeController', ['$scope', 'networkService', function ($scope, networkService) {
	(function getName() {
		networkService.getName().then(function (data) {
			$scope.name = data;
		})
	}());
}]);
