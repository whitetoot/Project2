const apiKey = require("./../.env").apiKey;

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=mental-health-nurse-practitioner&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=",
    "method": "GET",
}

$.ajax(settings).done(function (response) {
    console.log(response);
});