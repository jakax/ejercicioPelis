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
$(document).ready(function() {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=43fa16adddb5c45562182359a3c3f902';

    $('button').click(function() {
        var input = $('#movie').val(),
            movieName = encodeURI(input);
        $.ajax({
            type: 'GET',
            url: url + mode + input + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
            },
            error: function(e) {
                console.log(e.message);
            }
        });
    });
});​