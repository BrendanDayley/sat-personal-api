app.service('networkService', ['$q', '$http', function ($q, $http) {
	this.getInfo = function () {

	}

	this.getName = function () {
		var deferred = $q.defer();
		$http({
				method: 'GET',
				url: 'http://localhost:8181/api/name'
			}).then(function (response) {
				deferred.resolve(response.data);
			}),
			function (error) {
				console.log('error: ' + error);
			};
		return deferred.promise;
	};
}]);
