angular.module('app', []).controller('appCtrl', function($scope, $http) {

        $http({
			method: 'GET',
			url: 'https://storage.scrapinghub.com/items/145711?apikey=4ef60efbba564ca0b08fdea5a0501761&format=json'
		}).then(function successCallback(response) {
            last = response.data.length - 1
            $scope.moviles = response.data[last].data
		}, function errorCallback(response) {
		});
			

	});