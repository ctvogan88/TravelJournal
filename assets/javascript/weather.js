

/// just for demonstration purpose:
var lon = 39.721846;
var lat = -91.5154482;
    
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


