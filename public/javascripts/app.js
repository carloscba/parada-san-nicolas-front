angular.module('app', []).controller('appCtrl', function($scope, $http) {

	$http({
		method: 'GET',
		url: '/data'
	}).then(function successCallback(response) {
		
		$scope.proximo = response.data[0].data[0]
		$scope.moviles = response.data[0].data;

	}, function errorCallback(response) {
	
	});
			

});