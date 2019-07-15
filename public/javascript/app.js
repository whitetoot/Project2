function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

$.get("/api/doctors").then(function (response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
        if (response[i].profile.bio != "") {
            // take each of the responses and create a new html element
            // and append that element to "content-placeholder"
            let phoneNumber = formatPhoneNumber(response[i].practices[0].phones[0].number)

            let docdiv = $("<div class='name'>");
            docdiv.html(response[i].profile.first_name + " " + response[i].profile.last_name + ", " + response[i].specialties[0].actor + ", " + phoneNumber + ", " + response[i].practices[0].visit_address.street);
            let dscdiv = $("<div class='bio' >");
            dscdiv.html(response[i].profile.bio);

            $("#content-placeholder").append(docdiv);
            $("#content-placeholder").append(dscdiv);
        }
    }
})


$.ajax(settings).done(function (response) {
    console.log(response);
});