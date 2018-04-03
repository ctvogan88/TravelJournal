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

// establish variable for viewing mode
var mapViewStatus = true;

// show/hide jounral entry form or map view 
$("#btnAdd").click(function () {
    if (mapViewStatus) {
        $(".createJournalWindow").show();
        $(this).html("<h1>VIEW MAP</h1>");
        mapViewStatus = false;
    } else {
        $(".createJournalWindow").hide();
        $(this).html("<h1>ADD JOURNAL</h1>");
        mapViewStatus = true;
    }

})

//cancel button
$("#cancel-button").click(function () {
    $(".createJournalWindow").hide();
});

//id='submit-button' on click
$("#submit-button").click(function () {
    // alert("you clicked submit.");

    var title = $("#input-title").val().trim();
    var content = $("#input-content").val().trim();
    var lon = $("#input-lon").val().trim();
    var lat = $("#input-lat").val().trim();
    var temp = $("#input-temp").val().trim();
    var w_condition = $("#input-w-condition").val().trim();

    //data validation:
    if (title !== "" && content !== "") {

        //make an object
        var dataObject = {
            title: title,
            content: content,
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
    var lon = snap.val().lon;
    var lat = snap.val().lat;
    var temp = snap.val().temp;
    var w_condition = snap.val().w_condition;
    //changes happened here above

    var containerDiv = $("<div>");
    containerDiv.attr("class", "articleDiv");

    var entryButton = $("<button>");
    entryButton.attr("class", "articleBTN")
    entryButton.attr("data-title", title);
    entryButton.attr("data-content", content);
    entryButton.attr("data-lon", lon);
    entryButton.attr("data-lat", lat);
    entryButton.attr("data-temp", temp);
    entryButton.attr("data-w-condition", w_condition);
    entryButton.html("<h3><b>Title:</b> " + title + "</h4>");
    entryButton.append("<h4><b>Content: </b>" + content + "</h4>");
    entryButton.append("<p>longitude: " + lon + "</p");
    entryButton.append("<p>littitude: " + lat + "</p");
    entryButton.append("<p>Temperature: " + temp + "</p");
    entryButton.append("<p>Weather: " + w_condition + "</p");


    containerDiv.append(entryButton);


    // populates the Entry Display when Article Button is clicked
    $(document).on("click", ".articleBTN", function (event) {
        event.preventDefault();
        console.log("clicked", $(this));

        // put entry data into variables
        var entryTitle = $(this).attr("data-title");
        var entryContent = $(this).attr("data-content");
        var entryLon = $(this).attr("data-lon");
        var entryLat = $(this).attr("data-lat");
        var entryTemp = $(this).attr("data-temp");
        var entryWeather = $(this).attr("data-w-condition");

        console.log(entryTitle + entryContent + entryLon + entryTemp + entryWeather);

        // displays the form/results window
        $(".createJournalWindow").show();

        $("label[for='input-title']").text("Title: " + entryTitle);
        $("label[for='applyDistanceSlab']").text("10 kms");
        $("#input-title").attr("placeholder", entryTitle);
        $("#input-content").attr("placeholder", entryContent);
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
