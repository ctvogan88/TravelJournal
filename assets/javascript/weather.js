

/// just for demonstration purpose:
var lon = 39.721846;
var lat = -91.5154482;
    // object.long = data.currently.longitude;
    // object.lat = data. currently.latitude;
    // $("#input-lon").val( object.long);
    // $("#input-lat").val(object.lat);
    // AIzaSyBBuPmZLUH2hOY9WD0eqOotITh4PMoL8Ug

       var queryUrlGL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBBuPmZLUH2hOY9WD0eqOotITh4PMoL8Ug&callback=initMap"

    //   $.ajax({
    //     url:queryUrlGL,
    //     method: "GET"
    //   }).then(function(response) {
    //     console.log(response);
    //   });    
      $.getJSON(queryUrlGL, function(data){
        console.log(data);
      });

getWeather(lon, lat);

function getWeather(lon, lat){
    var object = {
        "F": null,
        "Status": null
        };
var f = lon +","+ lat;
var fullURL = "https://api.darksky.net/forecast/9d227d38df82a82af5c132e981501faf/" + f + "?extend=hourly&callback=?";


$.getJSON(fullURL, function(data){
    // console.log(data);
    object.F = data.currently.temperature;
    object.Status = data.currently.summary;
   
    $("#input-temp").val(object.F);
    $("#input-w-condition").val(object.Status);

});

}


