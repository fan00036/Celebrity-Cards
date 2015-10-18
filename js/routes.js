angular.module('app')
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'main.html',
        controller:'mainCtrl'
    })
    .when('/details/:id',{
        templateUrl:'details.html',
        controller:'detailsCtrl'
    })
    .otherwise({redirectTo: '/'});
});