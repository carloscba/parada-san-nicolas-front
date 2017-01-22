angular.module('app', []).controller('appCtrl', function($scope, $http) {

	$scope.loading = true;

	$http({
		method: 'GET',
		url: '/data'
	}).then(function successCallback(response) {
		$scope.loading = false;
		$scope.proximo = response.data[0].data[0]
		$scope.moviles = response.data[0].data;



	}, function errorCallback(response) {
	
	});
			

});