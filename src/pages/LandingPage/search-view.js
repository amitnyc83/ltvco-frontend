"use strict"

function search() {
    var BASE_URL = 'https://ltv-data-api.herokuapp.com/api/v1/';
    var email = document.getElementById('email').value;
    if (email === '') {
        // Error no email
        return;
    }

    window.location.href = '../SearchResults/search-results.html?email=' + email;
}