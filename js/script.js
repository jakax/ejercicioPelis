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


var app = angular.module(‘store’, [ ]);

app.controller(‘FilmController’, function(){
    this.product = films;
});

var url = 'http://api.themoviedb.org/3/',
    mode = 'search/movie?query=',
    input,
    movieName,
    key = '&api_key=43fa16adddb5c45562182359a3c3f902';
    urlCompleta = url + mode + input + key;


$http({method: 'GET', url: '/someUrl'}).success(function(data, status, headers, config) {
    var mainInfo = $http.get('content.json').success(function(response) {
        return response.data;
    });

app.factory('mainInfo', function($http) { 

    var obj = {content:null};

    $http.get('content.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
    });    

    return obj;    
});





$(document).ready(function() {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=43fa16adddb5c45562182359a3c3f902';
    $('#searchButton').click(function() {
console.log('entr');
        var input = $('#filter').val(),
urlCompleta = url + mode + input + key;
console.log(urlCompleta);
        $.getJSON(
            urlCompleta,
           //'http://api.themoviedb.org/3/search/movie?query=lord&api_key=43fa16adddb5c45562182359a3c3f902',
            function(json) {
                function takeName (element, idex, array) {
                    console.log("el titulo de la pelicula es: " + element.original_title);
                }
                var films = json.results;
                console.log(json.results);
                films.forEach(takeName);
                //var obj = JSON.parse(json);
                document.getElementById("demo").innerHTML = resultadoDeLaBusqueda.forEach(takeName);
            }
        );
    });
});