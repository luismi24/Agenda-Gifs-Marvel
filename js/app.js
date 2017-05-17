(function () {
    'use strict';
    angular.module('dcesmejor', ['ngRoute']).config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when("/", {

                controller: 'UserController',
                templateUrl: '/views/home.html'
            })
        
                .when("/users/:id", {
                
                controller: 'UserController',
                templateUrl: '/views/user.html'
            })
                .otherwise({redirectTo : "/"});
    }
})();