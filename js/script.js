// $(function(){
//     $.getJSON('https://api.themoviedb.org/3/movie/550?api_key=43fa16adddb5c45562182359a3c3f902', function(data) {
//         console.log(data);
//     });
// });


 
// $(function(){
//     $.getJSON('https://api.themoviedb.org/search?api_key=43fa16adddb5c45562182359a3c3f902', function(data) {
//         console.log(data);
//     });
// });
// $(document).ready(function() {
//     var url = 'http://api.themoviedb.org/3/',
//         mode = 'search/movie?query=',
//         input,
//         movieName,
//         key = '&api_key=43fa16adddb5c45562182359a3c3f902';

//     $('button').click(function() {
//         $.getJSON(url + mode + input + key, function(json) {
//             alert();
//             console.log(json);
//         });
//         // success: function(json) {
//         //     console.dir(json);
//         //     console.log(json);
//         //     alert();
//         //     $('.peli').html('Hello World!');
//         // },
//         // error: function(e) {
//         //     console.log(e.message);
//         //     alert();
//         // }
//     });
// });


// var app = angular.module(‘’, []);

// app.controller(‘PelisController’, function(){
//     this.product = films;
// });

// var url = 'http://api.themoviedb.org/3/',
//     mode = 'search/movie?query=',
//     input,
//     movieName,
//     key = '&api_key=43fa16adddb5c45562182359a3c3f902';
//     urlCompleta = url + mode + input + key;


// $http({method: 'GET', url: urlCompleta}).success(function(data, status, headers, config) {
//     var mainInfo = $http.get('content.json').success(function(response) {
//         return response.data;
//     });

// app.factory('mainInfo', function($http) { 

//     var obj = {content:null};

//     $http.get('content.json').success(function(data) {
//         // you can do some processing here
//         obj.content = data;
//     });    

//     return obj;    
// });


// function searchFunction() {
//     $(document).ready(function() {
//         var url = 'http://api.themoviedb.org/3/',
//             mode = 'search/movie?query=',
//             input,
//             movieName,
//             key = '&api_key=43fa16adddb5c45562182359a3c3f902';
//         $('#searchButton').click(function() {
//             console.log('entr');
//             var input = $('#filter').val(),
//                 urlCompleta = url + mode + input + key;
//                 console.log(urlCompleta);
//             $.getJSON(
//                 urlCompleta,
//                 //'http://api.themoviedb.org/3/search/movie?query=lord&api_key=43fa16adddb5c45562182359a3c3f902',
//                 function(json) {
//                     function takeName (element, idex, array) {
//                         console.log("el titulo de la pelicula es: " + element.original_title);
//                     }
//                     var films = json.results;
//                     console.log(json.results);
//                     films.forEach(takeName);
//                     //var obj = JSON.parse(json);
//                     document.getElementById("demo").innerHTML = resultadoDeLaBusqueda.forEach(takeName);
//                 }
//             );
//         });
//     });
// }


angular.module('myApp', [])
.controller('miControlador', ['$scope', function($scope) {
    var self = this;
    self.searchFunction = function() {
        var url = 'http://api.themoviedb.org/3/',
            mode = 'search/movie?query=',
            movieName,
            key = '&api_key=43fa16adddb5c45562182359a3c3f902',

            urlCompleta = url + mode + self.entrada + key;
            console.log(urlCompleta); 
            
        $.getJSON(
            urlCompleta,
            //'http://api.themoviedb.org/3/search/movie?query=lord&api_key=43fa16adddb5c45562182359a3c3f902',
            function(json) {
                function takeName (element, idex, array) {
                    console.log("el titulo de la pelicula es: " + element.original_title);
                    var titulo = element.original_title;
                    //$scope.titulos;
                }
                var resultadoDeLaBusqueda = json.results;
                //$scope.films;
                $scope.titulos = resultadoDeLaBusqueda.forEach(takeName);
                //var obj = JSON.parse(json);
                //document.getElementById("demo").innerHTML = resultadoDeLaBusqueda.forEach(takeName);
                }
            );
    };
}]);






