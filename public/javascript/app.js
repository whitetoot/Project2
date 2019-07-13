$.get("/api/doctors").then(function (response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
        // take each of the responses and create a new html element
        // and append that element to "content-placeholder"
        console.log(response[i].profile.first_name);
        console.log(response[i].profile.last_name);
        let docdiv = $("<div>");
        docdiv.html(response[i].profile.first_name + " " + response[i].profile.last_name + ", " + response[i].specialties[0].actor);
        let dscdiv = $("<div>");
        dscdiv.html(response[i].profile.bio);

        $("#content-placeholder").append(docdiv);
        $("#content-placeholder").append(dscdiv);
    }
})


$.ajax(settings).done(function (response) {
    console.log(response);
});