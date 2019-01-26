  var queryUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBK8DHqD3RUDa1tWQH0hd4h87dN6d6JmK0&libraries=places"

  var map;
  var infowindow;

  function initMap() {
    var pyrmont = {lat: -33.867, lng: 151.195};

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,
      type: ['store']
    }, callback);
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
/* </script>
</head>
<body>
<div id="map"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" async defer></script>
</body>
</html>*/

/* START OMDB Database API*/

//set an on-click event for the send button 
//set an on-click for enter button in search

$("#sendbutton").on("click", function(event) {
  event.preventDefault();
var selected = $("#search").val();

//var selected = "Cinderella"

var queryURL = "https://www.omdbapi.com/?t=" + selected + "&y=&plot=short&apikey=trilogy"
  
// Perfoming an AJAX GET request to our queryURL
$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {
  console.log (response);
    var searchResults = response.Actors;
    var moviePoster = response.Poster;
    var genre = response.Genre;
    var ratings = response.Rated;

      console.log(searchResults);
      console.log (moviePoster);


var posterTag = $("<img>");

// Giving the image tag an src attribute of a proprty pulled off the
// result item
posterTag.attr("src", moviePoster);

// Appending the paragraph and personImage we created to the "gifDiv" div we created
$(".imgCorral").html(posterTag);
//$(".imgCorral").append(moviePoster);

$("#genre").text (genre);
$("#ratings").text (ratings);
})

})