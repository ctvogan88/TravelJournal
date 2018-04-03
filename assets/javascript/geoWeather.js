var url = "http://ip-api.com/json"
$.ajax({
    url: url,
    method: "GET"
}).then(function (data) {
console.log(data);
    //Lat
    var lat = data.lat
    //Lon
    var lon = data.lon
    //City
    var city = data.city
    $("#input-lat").val(lat);
    $("#input-lon").val(lon);
    $("#input-city").val(city);

    var fullURL = "https://api.darksky.net/forecast/9d227d38df82a82af5c132e981501faf/" + lat + "," + lon + "?extend=hourly&callback=?";
    $.getJSON(fullURL, function (data2) {
        $("#input-temp").val(data2.currently.temperature);
        $("#input-w-condition").val(data2.currently.summary);

    });


});