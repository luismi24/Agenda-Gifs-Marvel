(function() {
'use strict';

    angular
        .module('dcesmejor')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'UserFactory', '$routeParams' ];
    function HomeController($scope, UserFactory, $routeParams)  {
        $scope.newUser = {};
        $scope.addUser = addUser;
        $scope.userCompleted = userCompleted;
        $scope.eraseAll = eraseAll;
        $scope.barselected = 'datos';

        activate();

        ////////////////

        function activate() {
            $scope.users = UserFactory.getAll();
         }
         function addUser(){
             UserFactory.addUser($scope.newUser);
         }

         function userCompleted(){
             return $scope.editForm.$valid;
         }
         
         function eraseAll(){
             UserFactory.eraseAll();
         }
         
    }
})();