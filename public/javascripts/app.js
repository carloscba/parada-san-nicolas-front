var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'ctrlHome'
    })
    
    .when('/destino/:spyder', {
      templateUrl: 'views/destino.html',
      controller: 'ctrlDestino'
    })
    
});