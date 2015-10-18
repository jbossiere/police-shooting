var drawMap = function() {
 	var map = L.map('mymap').setView([35.25, -98.88], 4);
	var layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jbossiere.cifu543lk1lhpudm0h9cfsnag',
    accessToken: 'pk.eyJ1IjoiamJvc3NpZXJlIiwiYSI6ImNpZnU1NDR5ZzFsYjd0Z2x5MTI3Ym8zbmsifQ.JQrEEzRo9GxQYlygE4qaHg'
  }).addTo(map);
  /*L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);*/
}

// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js
  $.ajax({
  	url: "../data/response.json",
  	type: "get",
  	success: customBuild();
  });

  // When your request is successful, call your customBuild function
 
}

// Loop through your data and add the appropriate layers and points
var customBuild = function() {
	// Be sure to add each layer to the map

	// Once layers are on the map, add a leaflet controller that shows/hides layers
  
}


