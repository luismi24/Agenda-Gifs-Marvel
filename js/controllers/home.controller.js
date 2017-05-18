(function() {
'use strict';

    angular
        .module('dcesmejor')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'UserFactory', '$routeParams', 'UserHttp' ];
    function HomeController($scope, UserFactory, $routeParams, UserHttp)  {
        $scope.newUser = {};
        $scope.addUser = addUser;
        $scope.userCompleted = userCompleted;
        $scope.eraseAll = eraseAll;
        $scope.barselected = 'datos';
        $scope.busquedaGifs = busquedaGifs;
        $scope.gifis = [];
        $scope.gifFavs = gifFavs;
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
         
         function busquedaGifs(){
             var searchGifis = $scope.searchGifis;
             UserHttp.searchGif(searchGifis).then(function(response){
                 $scope.gifis = response;
             })
             
         }

         function gifFavs(gifi){
            if (!$scope.newUser.gifs){
                $scope.newUser.gifs = [];
            } 
            $scope.newUser.gifs.push(gifi);
         }
    }
})();