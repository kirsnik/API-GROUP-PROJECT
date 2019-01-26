$(document).ready(function () {

  moviesInTheater();

  function moviesInTheater(){
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
  
  function moviesComingSoon(){
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

});