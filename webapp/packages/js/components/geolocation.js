export default function geolocation () {

    const request = new XMLHttpRequest()

    request.open('GET', 'http://ip-api.com/json/', true)
    request.onload = function() {
        const data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            const currentCity = data.city;
            const currentPostCode = data.zip;
            const currentCountry = data.country;

            document.querySelector('.geoloaction__msg-city').innerHTML = currentCity;
            document.querySelector('.geoloaction__msg-postcode').innerHTML = currentPostCode;
            document.querySelector('.geoloaction__msg-country').innerHTML = currentCountry;

        } else {
            console.log('Ups ... something wrong with the Geo API')
        }
    }
    
    request.send()


    // var map;
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: 51.4743, lng: -0.0928},
    //         zoom: 15
    //     });
    // }
};