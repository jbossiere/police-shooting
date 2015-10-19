var unknownG = new L.layerGroup([]);
var male = new L.layerGroup([]);
var female = new L.layerGroup([]);
var map;

// Function to draw your map
var drawMap = function() {
  map = L.map('mymap').setView([35.25, -98.88], 4);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     id: 'jbossiere.cifu543lk1lhpudm0h9cfsnag',
     accessToken: 'pk.eyJ1IjoiamJvc3NpZXJlIiwiYSI6ImNpZnU1NDR5ZzFsYjd0Z2x5MTI3Ym8zbmsifQ.JQrEEzRo9GxQYlygE4qaHg'
  }).addTo(map);
  getData(); 
}

// Function for getting data
var getData = function() {
  $.getJSON('data/response.json').then(customBuild);
}

var customBuild = function(data) {
  for (i = 0; i < data.length; i++) {

    var lat = data[i]["lat"];
    var lng = data[i]["lng"];

    var name = data[i]["Victim Name"];

    var armedOrNot = data[i]["Armed or Unarmed"];

    var race = data[i]["Race"];

    var state = data[i]["State"];

    var gender = data[i]["Victim's Gender"];

    var summary = data[i]["Summary"];

    if (gender == 'Unknown') {
      var circle = new L.circleMarker([lat, lng]);
      unknownG[i] = data[i];
      circle.addTo(unknownG).addTo(map);
    } else if (gender == "Male") {
      var circle = new L.circleMarker([lat, lng]);
      male[i] = data[i];
      circle.addTo(male).addTo(map);
    } else {
      var circle = new L.circleMarker([lat, lng]);
      female[i] = data[i]
      circle.addTo(female).addTo(map);
    }
    circle.bindPopup(summary);
  }
}
