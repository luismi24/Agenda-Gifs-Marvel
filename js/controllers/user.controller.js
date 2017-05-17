(function() {
'use strict';

    angular
        .module('dcesmejor')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$routeParams', 'UserFactory'];
    function UserController($scope, $routeParams, UserFactory) {
        

        activate();

        ////////////////

        function activate() {
            $scope.users = UserFactory.getAll();
            function activate() {
            var userId = $routeParams.id;
            $scope.users = UserFactory.get(userId);
            }
        }
    }
})();