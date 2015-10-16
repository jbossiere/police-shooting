var drawMap = function() {
 	var map = L.map('mymap').setView([35.25, -98.88], 4);
	var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
 	layer.addTo(map);
 	getData();
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


