app.controller('ctrlHome', function($rootScope, $scope, $http, $location) {

	
	$scope.labelSeleccion = "origen"


	
	$scope.countSet = 0;
	var origen   = '';
	var destino  = '';
	
	$scope.set = function(label, title){

		$scope.countSet++;
		
		if($scope.countSet == 1){
			origen = label;
			$rootScope.origenTitle = title;
		}else if($scope.countSet == 2){
			destino = label;
			$rootScope.destinoTitle = title;

			$scope.loading = true;
			$scope.countSet = 0;
			$location.path("/destino/"+origen+'-'+destino)
		}else{
			countSet = 0;
		}
	}

});

app.controller('ctrlDestino', function($scope, $http, $routeParams) {
	$scope.loading = false;
	$scope.getData = function(spider){
		$scope.loading = true;
		$http({
			method: 'GET',
			url: '/data/'+spider
		}).then(function successCallback(response) {
			
			$scope.loading = false;
			$scope.proximo = response.data[0].data[0]
			$scope.moviles = response.data[0].data;

		}, function errorCallback(response) {
		
		});

	}
	$scope.getData($routeParams.spyder)

});