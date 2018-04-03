
  var long = 10 ;
  var lat = -21;
  var queryUrL  = "https://api.darksky.net/forecast/9d227d38df82a82af5c132e981501faf/";

  queryUrL = queryUrL + long + "," + lat; 

var queryUrlGL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAV5nuOTlmfsvRYZpn--64G27L12SRtYkI"

      //proxy url for the class
      var apiURL = 'https://proxy-cbc.herokuapp.com/proxy';
      //the url for google places
    
      $.ajax({
          url: apiURL,
          method: 'POST',
          data: {
              'url': queryUrL
          }
      }).done(function(response) {
          var res = JSON.stringify(response);
          $("#stuff").text(res);
          console.log(response)
      });

var glApi = "AIzaSyAV5nuOTlmfsvRYZpn--64G27L12SRtYkI";
    //   var queryUrlGL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAV5nuOTlmfsvRYZpn--64G27L12SRtYkI"

    //   $.ajax({
    //     url:queryUrlGL,
    //     method: "GET"
    //   }).then(function(response) {
    //     console.log(response);
    //   });