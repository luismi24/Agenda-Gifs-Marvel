(function() {
'use strict';

    angular
        .module('dcesmejor')
        .factory('UserHttp', UserHttp);

    UserHttp.$inject = ['$http'];
    function UserHttp($http) {
        var service= {
            searchGif: searchGif
        }

        ////////////////
        return service;

        function searchGif(searchGifis) {
            return $http.get("http://api.giphy.com/v1/gifs/search?q="+searchGifis+"&api_key=dc6zaTOxFJmzC")
                .then(function(response){
                    var gifis = [];
                    response.data.data.forEach(function(element) {
                        gifis.push(element.images.original.url)
                    }); return gifis;
                })
        }
        
    }
})();