// Function to draw your map
var drawMap = function() {

  // Create map and set view
  var map = L.map('mymap').setView([35.25, -98.88], 4);
 

  // Create a tile layer variable using the appropriate url
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'jbossiere.cifu543lk1lhpudm0h9cfsnag',
      accessToken: 'pk.eyJ1IjoiamJvc3NpZXJlIiwiYSI6ImNpZnU1NDR5ZzFsYjd0Z2x5MTI3Ym8zbmsifQ.JQrEEzRo9GxQYlygE4qaHg'
    }).addTo(map);
    getData();

  // Add the layer to your map
 

  // Execute your function to get data
 
}

// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js
  $.getJSON('../data/response.json').then(customBuild());


  // When your request is successful, call your customBuild function

}

var customBuild = function() {
  console.log();
}
// Loop through your data and add the appropriate layers and points
