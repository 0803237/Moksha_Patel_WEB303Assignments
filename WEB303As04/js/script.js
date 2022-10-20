/*
    Assignment #4
    {Moksha Patel}
*/

$(function () {
    // your code here
    navigator.geolocation.getCurrentPosition(success, fail);

    function success(position)
    {
        let crntLatitude = position.coords.latitude;
        let crntLongitude = position.coords.longitude;

        $("#locationhere").html(`<h1>My Current Location:</h1><div>Latitude:  ${crntLatitude} <br/> Longitude:  ${crntLongitude}</div>`);
    
        let stordLatitude = localStorage.getItem('storedLat'); 
        let stordLongitude = localStorage.getItem('storedLon'); 
      
        if(stordLatitude && stordLongitude)
        {
            $('#locationhere').append(`<h1>Restored location from the Local storage:</h1> <div id='stored'>Latitude: ${stordLatitude} </br></br> Longitude: ${stordLongitude}</div>`);

            $('#locationhere').append(`<h1 id='welcomeBack'>Welcome Back to the page</h1>`);
            
            
            let lat2 = parseFloat(stordLatitude);
            let lon2 = parseFloat(stordLongitude);

            let distance = calcDistanceBetweenPoints(crntLatitude, crntLongitude, lat2,lon2);
            let distanKm = distance/1000;
            
            $('#locationhere').append(`<h3>You travelled subtotal of ${distanKm.toFixed(4)} km</h3>`);
            localStorage.setItem('stordLatitude', crntLatitude);
            localStorage.setItem('stordLongitude', crntLongitude);
           
        
        }
        else{            
            $('#locationhere').append(`<h2>Welcome to our page for first time!!</h2>`);
            localStorage.setItem('stordLatitude', crntLatitude);
            localStorage.setItem('stordLongitude', crntLongitude);
            
        }
    } 
       
    
    function fail(){
        alert("Caution! You must enable geolocation.");
    }




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


