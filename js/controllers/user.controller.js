(function() {
'use strict';

    angular
        .module('dcesmejor')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$routeParams', 'UserFactory'];
    function UserController($scope, $routeParams, UserFactory) {
        $scope.addUser = addUser;

        activate();

        ////////////////

        function activate() {
                $scope.user = UserFactory.get($routeParams.id);
            
        }
    }
})();