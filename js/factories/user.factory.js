(function() {
'use strict';

    angular
        .module('dcesmejor')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = [];

    function UserFactory($inject) {
        var service = {
            getAll: getAll,
            get: get,
            addUser: addUser
        };
        
        return service;

        ////////////////
        
        function getAll(){
            if (localStorage.getItem('users')) {
                var actualUsers = JSON.parse(localStorage.getItem('users'));
                if (typeof actualUsers == 'object' && actualUsers instanceof Array)
                    return actualUsers;
                else {

                }
            }
        }
                
            
        

        function get(userId){
            var users = getAll();
            return users.filter(function (user){ return user.id == userId})[0];
        }

        function addUser(newUser) {
                newUser.id = newId();
                var users = getAll();
                users.push(newUser);
                console.log(users);
                update(users);
        }

        function update(users) {
            localStorage.setItem('users', JSON.stringify(users));
        }

         function newId() {
            return Math.random().toString(36).substring(2,20);
        }
    }
})();