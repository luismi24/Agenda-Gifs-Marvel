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
                phone: '654987312'
            },{
                id: 1,
                name: 'ofiejio',
                aka: 'asdfefef',
                phone: '654321897'
            },{
                id: 2,
                name: 'ewrtwert',
                aka: 'ghgvcbxcb',
                phone: '666333999'
            }];
        }
        function get(userId){
            var users = getAll();
            return users.filter(function (user){ return user.id == userId})[0];
        }
    }
})();