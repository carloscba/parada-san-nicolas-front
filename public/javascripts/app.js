angular.module('app', []).controller('appCtrl', function($scope, $http) {

	$http({
		method: 'GET',
		url: '/data'
	}).then(function successCallback(response) {
		console.log(response.data[0].data)
		$scope.moviles = response.data[0].data;

	}, function errorCallback(response) {
	
	});
			

});