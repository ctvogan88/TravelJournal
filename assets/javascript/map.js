function initMap() {
    // var locations = [
    //     ['Bondi Beach', -33.890542, 151.274856, 0], //the name of the locaiton will be the title of the journal 
    //     ['Coogee Beach', -33.923036, 151.259052, 0], // the
    //     ['Cronulla Beach', -34.028249, 151.157507, 0],
    //     ['Manly Beach', -33.80010128657071, 151.28747820854187, 0],
    //     ['Maroubra Beach', -33.950198, 151.259302, 0]
    // ];

    var locaitons = [];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4
    });
    map.setCenter(new google.maps.LatLng(41.850033, -87.6500523));


    database.ref().on("child_added", function (snap) {
        entryKey = snap.key;

        //initialize  vars
        var title = snap.val().title;
        var content = snap.val().content;
        var city = snap.val().city;
        var lon = snap.val().lon;
        var lat = snap.val().lat;
        var temp = snap.val().temp;
        var w_condition = snap.val().w_coidtion;

        var iconBase = 'http://maps.google.com/mapfiles/kml/pal3';
        var icons = {
            journalEntry: {
                icon: iconBase + '/icon54.png'
            }
        };

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lon),
            map: map,
            icon: icons.journalEntry.icon
        });

        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {


                // infowindow.setContent(title);
                // infowindow.open(map, marker);
                console.log(title);
            }
        })(marker, title));
    });


}

