// Initialize Firebase
var config = {
    apiKey: "AIzaSyANNhzqVYqoSeLoMatGOb5YbIANBOR8ERo",
    authDomain: "traveljournal-14d81.firebaseapp.com",
    databaseURL: "https://traveljournal-14d81.firebaseio.com",
    projectId: "traveljournal-14d81",
    storageBucket: "traveljournal-14d81.appspot.com",
    messagingSenderId: "474695408824"
};
firebase.initializeApp(config);

var database = firebase.database();

//ebstablish  variable from viewing mode
var mapViewStatus = true;

// show/hide jounral entry form or map view 
$("#btnAdd").click(function () {
    // get updated API INFO FROM GEO LOCATION FUNCTION:
    getGeoData();


    if (mapViewStatus) {
        $(".createJournalWindow").show();
        $("#btnAdd").html("<h1>VIEW MAP</h1>");
        mapViewStatus = false;
    } else {
        $(".createJournalWindow").hide();
        $("#btnAdd").html("<h1>ADD JOURNAL</h1>");
        mapViewStatus = true;
    }
});

//cancel button
$("#cancel-button").click(function(){
    if (mapViewStatus) {
        $(".createJournalWindow").show();
        $("#btnAdd").html("<h1>VIEW MAP</h1>");
        mapViewStatus = false;
    } else {
        $(".createJournalWindow").hide();
        $("#btnAdd").html("<h1>ADD JOURNAL</h1>");
        mapViewStatus = true;
    }
});

//id='submit-button' on click
$("#submit-button").click(function () {
    // alert("you clicked submit.");

    var title = $("#input-title").val().trim();
    var content = $("#input-content").val().trim();

    var city = $("#input-city").val().trim();
    var country = $("#input-country").val().trim();
    var state = $("#input-state").val().trim();

    var lon = $("#input-lon").val().trim();
    var lat = $("#input-lat").val().trim();
    var temp = $("#input-temp").val().trim();
    var w_condition = $("#input-w-condition").val().trim();

//data validation:
if(title !=="" && content !==""){

    //make an object
    var dataObject = {
        title: title,
        content: content,
        country, country,
        state, state,
        city: city,
        lon: lon,
        lat: lat,
        temp: temp,
        w_condition: w_condition
    }

    //save it to firebase
    database.ref().push(dataObject);

    //clean the form
    $("#input-title").val("");
    $("#input-content").val("");
    $("#input-city").val("");
    $("#input-country").val("");
    $("#input-state").val("");
    $("#input-lon").val("");
    $("#input-lat").val("");
    $("#input-temp").val("");
    $("#input-w-condition").val("");
    //focus on the first line
    $("#input-title").focus();
    // alert("saved")
    $(".createJournalWindow").show();


    }
});


database.ref().on("child_added", function (snap) {
    entryKey = snap.key;

    //initialize  vars
    var title = snap.val().title;
    var content = snap.val().content;
    var city =snap.val().city;
    var country =snap.val().country;
    var state =snap.val().state;

    var lon = snap.val().lon;
    var lat = snap.val().lat;
    var temp = snap.val().temp;
    var w_condition = snap.val().w_condition;
    //changes happened here above

    var containerDiv = $("<div>");
    containerDiv.attr("class", "articleDiv");

    var entryButton = $("<button>");
    entryButton.attr("class", "journalEntry")
    entryButton.attr("data-title", title);
    entryButton.attr("data-content", content);
    entryButton.attr("data-city", city);
    entryButton.attr("data-country", country);
    entryButton.attr("data-state", state);
    entryButton.attr("data-lon", lon);
    entryButton.attr("data-lat", lat);
    entryButton.attr("data-temp", temp);
    entryButton.attr("data-w-condition", w_condition);
    entryButton.html("<h4>Title: "+title+"</h4>");
    entryButton.append("<h3><b>Content: </b>"+content+"</h3>");
    entryButton.append("<p>longitude: "+lon+"</p");
    entryButton.append("<p>littitude: "+lat+"</p");
    entryButton.append("<p>City: "+city+"</p");
    entryButton.append("<p>State: "+state+"</p");
    entryButton.append("<p>Country: "+country+"</p");
    entryButton.append("<p>Temperature: "+temp+"</p");
    entryButton.append("<p>Weather: "+w_condition+"</p");
    
    containerDiv.append(entryButton);


 // populates the Entry Display when Article Button is clicked
$(document).on("click", ".journalEntry", function(event){
    event.preventDefault();
    console.log("clicked", $(this));

    // put entry data into variables
    var entryTitle = $(this).attr("data-title");
    var entryContent = $(this).attr("data-content");
    var entryCity = $(this).attr("data-city");
    var entryLon = $(this).attr("data-lon");
    var entryLat = $(this).attr("data-lat");
    var entryTemp = $(this).attr("data-temp");
    var entryWeather = $(this).attr("data-w-condition");

    console.log(entryTitle + entryContent + entryCity + entryLon + entryTemp + entryWeather);

    // displays the form/results window
    $(".createJournalWindow").show();

    $("label[for='input-title']").text("Title: " +  entryTitle); 
    $("label[for='applyDistanceSlab']").text("10 kms");
    $("#input-title").attr("placeholder", entryTitle);
    $("#input-content").attr("placeholder", entryContent);
    $("#input-city").attr("placerholder", entryCity);
    $("#input-lon").attr("placeholder", entryLon);
    $("#input-lat").attr("placeholder", entryLat);
    $("#input-temp").attr("placeholder", entryTemp);
    $("#input-w-condition").attr("placeholder", entryWeather);

    $("input[for='input-title']").hide();
    
    /* $("submit-button").hide();
    $("cancel-button").hide(); */
});
    $("#listOfJournals").prepend(containerDiv);
})