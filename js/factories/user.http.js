(function() {
'use strict';

    angular
        .module('dcesmejor')
        .factory('UserHttp', UserHttp);

    UserHttp.$inject = ['$http'];
    function UserHttp($http) {
        var service= {
            searchGif: searchGif,
            searchComic: searchComic
        }

        ////////////////
        return service;

        function searchGif(searchGifis) {
            return $http.get("http://api.giphy.com/v1/gifs/search?q="+searchGifis+"&limit=8&api_key=dc6zaTOxFJmzC")
                .then(function(response){
                    var gifis = [];
                    response.data.data.forEach(function(element) {
                        gifis.push(element.images.original.url);
                    }); return gifis;
                })
        }
        
        function searchComic(searchComics) {
            return $http.get("https://gateway.marvel.com:443/v1/public/comics?titleStartsWith="+searchComics+"&limit=8&apikey=42a60257ddfbdf634ed6612b871c472b")
                .then(function(response){
                    var comics = [];
                    var img = '';
                    response.data.data.results.forEach(function(element,) {
                        console.log(element);
                        if(element.images.length > 0){
                            var formato = "."+element.images[0].extension;
                            var url = element.images[0].path;
                            img += url+formato;
                            
                        } else if (element.images == 0) {
                            img= 'http://placehold.it/150x150';
                        }
                        comics.push(img);
                        img= '';
                    }); return comics;
                })
        }
    }
})();