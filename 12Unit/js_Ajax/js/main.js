/* 
    main.js
    Author: SCC
    Created: 11-18-2019
    Edited: 4-5-2020
*/
'use strict;'

$(document).ready(function() {

    // Create XMLHttpRequest object
    var xhrObject = new XMLHttpRequest();
    // Create event handler for onreadystatechange event
    xhrObject.onreadystatechange = function() {                          // If the request is done (readyState === 4)...
        if(xhrObject.readyState === 4 && xhrObject.status === 200) {     // and I get a successful response from the server (status === 200) 
            var data = xhrObject.responseXML;                            // Then, capture the received XML data and put in a variable called "data."
            
            // console.log(data);
            var locationData = data.getElementsByTagName('location')[0].firstChild.nodeValue;
            document.getElementById('location_name').textContent = locationData;
            
            var conditionsData = data.getElementsByTagName('weather')[0].firstChild.nodeValue;
            document.getElementById('conditions').textContent = conditionsData;

            var tempData = data.getElementsByTagName('temperature_string')[0].firstChild.nodeValue;
            document.getElementById('temp').textContent = tempData;

            var humidityData = data.getElementsByTagName('relative_humidity')[0].firstChild.nodeValue;
            document.getElementById('humidity').textContent = humidityData;

            var windData = data.getElementsByTagName('wind_string')[0].firstChild.nodeValue;
            document.getElementById('wind').textContent = windData;

        }   

    };
    // Open connection to the "server" to get the data
    xhrObject.open('GET', 'https://api.weather.gov/stations/KMKT/observations/latest', true);
    xhrObject.setRequestHeader("accept", "application/vnd.noaa.obs+xml");
    // Send the request
    xhrObject.send();
});