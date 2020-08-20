'use strict';

var lat = 0, lon = 0;
//document.getElementById("change").innerHTML = "Hello World";
function getWeather(zip) {//gets weather for a certain zip code
    var key = '14ef9727e5fc6373b093c5bd4ace0844'; //openweathermap key
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',US&units=imperial&appid=' + key)
        .then(function (resp) { return resp.json() })//tries getting a response and converts to json
        .then(function (data) {// tries parsing the data
            console.log(data); //logs data to console for debugging
            document.getElementById("location").innerHTML = data.name;
            document.getElementById("temp").innerHTML = data.main.temp + '°';
            document.getElementById("condition").innerHTML = data.weather[0].description;
            document.getElementById("weatherIcon").className = "owf owf-" + data.weather[0].id; //updates icon underneath description
            return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial&appid=' + key)
        })
        .then(function (resp) { return resp.json() })//tries getting a response and converts to json
        .then(function (data) {// tries parsing the data
            console.log(data);
            //edits day1 box
            var d = new Date();
            document.getElementById("date0").innerHTML = (d.getMonth() + 1) + "/" + d.getDate();
            d.setDate(d.getDate()+1);
            document.getElementById("day0p").innerHTML = Math.round(data.daily[0].temp.max) + "°/ " + Math.round(data.daily[0].temp.min) + "°" + "\n";
            document.getElementById("day0i").className = "owf owf-" + data.daily[0].weather[0].id;
            //day1
            document.getElementById("date1").innerHTML = (d.getMonth() + 1) + "/" + d.getDate();
            d.setDate(d.getDate()+1);
            document.getElementById("day1p").innerHTML = Math.round(data.daily[1].temp.max) + "°/ " + Math.round(data.daily[1].temp.min) + "°";
            document.getElementById("day1i").className = "owf owf-" + data.daily[1].weather[0].id;
            //day2
            document.getElementById("date2").innerHTML = (d.getMonth() + 1) + "/" + d.getDate();
            d.setDate(d.getDate()+1);
            document.getElementById("day2p").innerHTML = Math.round(data.daily[2].temp.max) + "°/ " + Math.round(data.daily[2].temp.min) + "°";
            document.getElementById("day2i").className = "owf owf-" + data.daily[2].weather[0].id;
            //day3
            document.getElementById("date3").innerHTML = (d.getMonth() + 1) + "/" + d.getDate();
            d.setDate(d.getDate()+1);
            document.getElementById("day3p").innerHTML = Math.round(data.daily[3].temp.max) + "°/ " + Math.round(data.daily[3].temp.min) + "°";
            document.getElementById("day3i").className = "owf owf-" + data.daily[3].weather[0].id;
            //day4
            document.getElementById("date4").innerHTML = (d.getMonth() + 1) + "/" + d.getDate();
            d.setDate(d.getDate()+1);
            document.getElementById("day4p").innerHTML = Math.round(data.daily[4].temp.max) + "°/ " + Math.round(data.daily[4].temp.min) + "°";
            document.getElementById("day4i").className = "owf owf-" + data.daily[4].weather[0].id;
        })
        .catch(function () {//catches errors
            console.log("Error caught! Something went wrong")
        });
    
        
}

function getCoord(){
    try {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log("Latitude is equal to: " + position.coords.latitude + " Longitude is euqal to: " + position.coords.longitude);
        }    
        )
    } catch (error) {
        
    }
}
//getCoord();
//weatherBalloon(33901);

