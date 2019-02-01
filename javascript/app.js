var apikey = "jxuc57cma8hgjdv75w22nezs";
var baseUrl = "http://data.tmsapi.com/v1.1";
var showtimesUrl = baseUrl + '/movies/showings';
var zipCode = "92020";
console.log(zipCode)
var d = new Date();
var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

$(document).ready(function () {
    $.ajax({
        url: showtimesUrl,
        type: "GET",
        data: {
            startDate: today,
            zip: zipCode,
            jsonp: "dataHandler",
            api_key: apikey,
        },
        dataType: "jsonp",
    })

    $("#addZip").on("click", function (e) {
        e.preventDefault();

        var zipSearch = $("#zipInput").val().trim();
        zipCode = zipSearch;
        displayZip();
    });

    displayZip();
});


function displayZip() {
    $.ajax({
        url: showtimesUrl,
        type: "GET",
        data: {
            startDate: today,
            zip: zipCode,
            jsonp: "dataHandler",
            api_key: apikey,
        },
        dataType: "jsonp",
    })
}

function dataHandler(data) {
    $("#displayMovie").empty();

    console.log(data)
    $("#displayMovie").append('<p>Found ' + data.length + ' movies showing within 5 miles of ' + zipCode + ':</p>');
    var movies = data.hits;
    $.each(data, function (index, movie) {
        var movieData = '<div class="tile"><img src="http://developer.tmsimg.com/' + movie.preferredImage.uri + '?api_key=' + apikey + '"><br/>';
        movieData += movie.title;
        if (movie.ratings) { movieData += ' (' + movie.ratings[0].code + ') </div>' };
        $(document.body).append(movieData);
    });
}