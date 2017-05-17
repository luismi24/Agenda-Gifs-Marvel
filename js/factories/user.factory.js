(function() {
'use strict';

    angular
        .module('dcesmejor')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = [];

    function UserFactory($inject) {
        var service = {
            getAll: getAll,
            get: get
        };
        
        return service;

        ////////////////
        
        function getAll(){
            return [{
                id: 0,
                name: 'luismi',
                aka: 'sedas',
                age: '27',
                photo: 'http://placehold.it/200x200'
            },{
                id: 1,
                name: 'ofiejio',
                aka: 'asdfefef',
                age: '27',
                photo: 'http://placehold.it/200x200'
            },{
                id: 2,
                name: 'ewrtwert',
                aka: 'ghgvcbxcb',
                age: '27',
                photo: 'http://placehold.it/200x200'
            }];
        }
        function get(userId){
            var users = getAll();
            return users.filter(function (user){ return user.id == userId})[0];
        }
    }
})();