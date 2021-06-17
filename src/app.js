var miappRosmhy = angular.module('navegacion',['ngRoute']);
miappRosmhy.config( [ '$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'plantillas/innicio.html',
		controller: 'inicio'
	})
	.when('/confirmacion',{
		templateUrl: 'plantillas/confirmacion.html',
		controller: 'confirmacion'
	})
	.when('/404',{
		templateUrl: 'planillas/404.html',
		controller: 'inicio'
	})
	.otherwise({
		redirectTo: '/404'
	})
}])
