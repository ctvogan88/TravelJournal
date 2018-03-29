
var lon = 37.8267;
var lat = -122.4233;
var data = lon +","+ lat;
var fullURL = "https://api.darksky.net/forecast/9d227d38df82a82af5c132e981501faf/" + data + "?extend=hourly&callback=?";
// var proxyurl = "https://proxy-cbc.herokuapp.com/proxy";
// $.ajax({
//     url: fullURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// })


$.getJSON(fullURL, function(data){
    console.log(data);
});