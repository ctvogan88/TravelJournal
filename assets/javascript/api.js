
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

          //proxy url for the class
          var apiURL = 'https://proxy-cbc.herokuapp.com/proxy';
          //the url for google places
          var queryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.8530221,-117.18319989999999&radius=15000&type=restaurant,&key='+glApi;
          $.ajax({
              url: apiURL,
              method: 'POST',
              data: {
                  'url': queryURL
              }
          }).done(function(response) {
              var res = JSON.stringify(response);
              $("#stuff").text(res);

              console.log(response)
          });