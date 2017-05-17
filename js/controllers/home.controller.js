(function() {
'use strict';

    angular
        .module('dcesmejor')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'UserFactory', '$routeParams' ];
    function HomeController($scope, UserFactory, $routeParams)  {
        

        activate();

        ////////////////

        function activate() {
            $scope.users = UserFactory.getAll();
         }
    }
})();