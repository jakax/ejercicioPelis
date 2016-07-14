angular.module('myApp', [])
.controller('miControlador', function($scope, $http) {
    var self = this,
        titulo,
        titulos = '',
        errorMessage,
        jaka = [];
    self.searchFunction = function() {
        var url = 'http://api.themoviedb.org/3/',
            mode = 'search/movie?query=',
            movieName,
            key = '&api_key=43fa16adddb5c45562182359a3c3f902',
            urlCompleta = url + mode + self.entrada + key;
        $.ajax({
            url: urlCompleta,
            async: false,
            dataType: 'json',
            success: function (json) {
                films = json.results
                console.log(films);
            },
            error: function () {
                errorMessage = 'No se encontraron coincidencias'
            }
        })
            $scope.films = films;
            $scope.errorMessage = errorMessage;
            console.log(films);
    };
});
