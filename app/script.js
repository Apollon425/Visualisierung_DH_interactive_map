var map = L.map('map').setView([51.34, 12.36], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '© OpenStreetMap'
}).addTo(map);


//L.geoJson(data_bezirke).addTo(map);
var myLayer = L.geoJSON().addTo(map);
myLayer.addData(data_bezirke);

