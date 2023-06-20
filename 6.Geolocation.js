/*a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API. */
function getUserCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log("latitude : ", latitude);
        console.log("longitude : ", longitude);
    })
}
getUserCurrentLocation();