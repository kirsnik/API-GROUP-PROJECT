$(document).ready(function () {

  //current movies API

  moviesInTheater();

  function moviesInTheater() {
    var whatAsking = "filmsNowShowing/?n=10"
    var queryURL = "https://api-gate2.movieglu.com/" + whatAsking
    var userPosition
    navigator.geolocation.getCurrentPosition(function (position) {
      userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      console.log(userPosition)
      movieCall(userPosition)
    });

    //getting user position to collect current movies

    function movieCall(userPosition) {
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: {
          'api-version': "v200",
          'Username': 'UCSD_1',
          'Authorization': 'Basic VUNTRF8xOkl3eXFFbE9TY2FVOA==',
          'x-api-key': 'CFatqM0arm903zygeYWVn8lHTpNiDGdu5vLFHcAN',
          'device-datetime': "2018-11-27T13:26:30.147Z",
          'geolocation': "" + userPosition + "",
          'territory': "US",
          'client': "BUSI"
        }
      }).then(function (response) {
        console.log("Under response func", response);
        var poster = response.films;
        for (var i = 0; i < poster.length; i++) {

          var posterUrl = poster[i].images.poster[1].medium.film_image;
          var imgDiv = $("<div>");
          var img = $("<img>");
          img.attr("src", posterUrl);
          $(imgDiv).append(img);
          $("#imgCorral").append(imgDiv);
        }
      });
    }
  }

  //movies coming soon api
  function moviesComingSoon() {
    var whatAsking = "filmsComingSoon/?n=10"
    var queryURL = "https://api-gate2.movieglu.com/" + whatAsking
    var userPosition
    navigator.geolocation.getCurrentPosition(function (position) {
      userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      console.log(userPosition)
      movieCall(userPosition)
    });

    function movieCall(userPosition) {
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: {
          'api-version': "v200",
          'Username': 'UCSD_1',
          'Authorization': 'Basic VUNTRF8xOkl3eXFFbE9TY2FVOA==',
          'x-api-key': 'CFatqM0arm903zygeYWVn8lHTpNiDGdu5vLFHcAN',
          'device-datetime': "2018-11-27T13:26:30.147Z",
          'geolocation': "" + userPosition + "",
          'territory': "US",
          'client': "BUSI"
        }
      }).then(function (response) {
        console.log("Under response func", response);
        var poster = response.films;
        for (var i = 0; i < poster.length; i++) {

          var posterUrl = poster[i].images.poster[1].medium.film_image;
          var imgDiv = $("<div>");
          var img = $("<img>");
          img.attr("src", posterUrl);
          $(imgDiv).append(img);
          $("#imgCorral").append(imgDiv);
        }
      });
    }
  }

  showTimes();

  function showTimes() {
    var whatAsking = "cinemaShowTimes/?film_id=12345&cinema_id=54321&date=2018-04-12&sort=popularity";
    var queryURL = "https://api-gate2.movieglu.com/" + whatAsking
    var userPosition
    navigator.geolocation.getCurrentPosition(function (position) {
      userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
      movieCall(userPosition)

    });
    function movieCall(userPosition) {
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: {
          'api-version': "v200",
          'Username': 'UCSD_1',
          'Authorization': 'Basic VUNTRF8xOkl3eXFFbE9TY2FVOA==',
          'x-api-key': 'CFatqM0arm903zygeYWVn8lHTpNiDGdu5vLFHcAN',
          'device-datetime': "2018-11-27T13:26:30.147Z",
          'geolocation': "" + userPosition + "",
          'territory': "US",
          'client': "BUSI"
        }
      }).then(function (response) {
        console.log("Under trailer func", response.film_trailer);
      })
    }
  };

  trailers();
  function trailers() {
    var whatAsking = "trailers/?film_id=273307";
    var queryURL = "https://api-gate2.movieglu.com/" + whatAsking
    console.log(queryURL);
    var userPosition
    navigator.geolocation.getCurrentPosition(function (position) {
      userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
      movieCall(userPosition)
    });
    function movieCall(userPosition) {
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: {
          'api-version': "v200",
          'Username': 'UCSD_1',
          'Authorization': 'Basic VUNTRF8xOkl3eXFFbE9TY2FVOA==',
          'x-api-key': 'CFatqM0arm903zygeYWVn8lHTpNiDGdu5vLFHcAN',
          'device-datetime': "2018-11-27T13:26:30.147Z",
          'geolocation': "" + userPosition + "",
          'territory': "US",
          'client': "BUSI"
        }
      }).then(function (response) {
        console.log(response);
        var trailers = response.trailers;
        console.log(trailers.high)
        var trailerURL = trailers.high[0].film_trailer;
        console.log(trailerURL)
        var embed = $("<embed>")
        var div = $("<div>")
        var trailerEmbed = $(embed).attr("src", trailerURL);
        $(div).append(embed);
        $("#Trailer").append(trailerEmbed);
        console.log(trailerEmbed);
      })
    };
  }

});

/*var candy = ["dippin-dots.png", "buttered-popcorn.png", "sno-caps.png", "red-vines.png", "junior-mints.png", "sour-patch-kids.png"];
for (i=0; i<candy.length; i++) {

    var img = $("<img>");
    var divImger = $("<div>")
    var snackImage = img.attr ("src", candy[i]);
    console.log (snackImage);


    //$(divImger).append(snackImage);
    //$("#datesTimes").append(snackImage);
}*/
