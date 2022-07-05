standard_base_layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 13,
	minZoom: 5,
	attribution: '© OpenStreetMap'
});

satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 13,
	minZoom: 6,
	attribution: '© Google',
    subdomains:['mt0','mt1','mt2','mt3']
});

	/* global statesData */
	ortsteile = L.geoJson(data_ortsteile, {
		style: style,
		onEachFeature: onEachFeature
	})

	bezirke = L.geoJson(data_stadtbezirke, {
		style: style,
		onEachFeature: onEachFeature
	});

	var ortsteile_layer = L.layerGroup([ortsteile]);
	var bezirke_layer = L.layerGroup([bezirke]);


	var map = L.map('map', {layers: [standard_base_layer, bezirke_layer]}).setView([51.34, 12.36], 11);



	// control that shows bezirk/ot info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (properties) {
		
		this._div.innerHTML = '<h4>Bezirk/Ortsteil:</h4>' +  (properties ?
			'<b>' + properties.Name + '</b><br />' + 'NDVI: ' + Number(properties.NDVI).toFixed(2) : 'Hover over a map section');
	};

	info.addTo(map);


	// get color depending on ndvi value
	function getColor(d) {
		return 	d > 0.65  ? '#00441b' :
			d > 0.6  ? '#006d2c' :
			d > 0.55  ? '#238b45' :
			d > 0.5  ? '#41ae76' :
			d > 0.45  ? '#66c2a4' :
			d > 0.4   ? '#99d8c9' :
			d > 0.35   ? '#ccece6' :
			d > 0.3 ? '#e5f5f9':
			d > 0.25 ? '#f7fcfd': '#fcfcfa';

	}

	function style(feature) {
		
		return {
			weight: 2,
			opacity: 1,
			color: 'grey',        
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.NDVI)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}


	function resetHighlight(e) {
		ortsteile.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}



	map.attributionControl.addAttribution('Satellite data for NDVI &copy; <a href="http://esa.gov/">European Space Agency</a>');

	/*Layer control*/

	var baseMaps = {
    "Street Map": standard_base_layer,
    "Satellite": satellite
};

	var overlayMaps = {
		"Bezirke": bezirke_layer,
		"Ortsteile": ortsteile_layer
	};

    
	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);



    /*Legend*/


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend');
		var ndvi_grades = [0, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65];
		//var grades = [0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0];

		var labels = [];
		var color, next_color;

		for (var i = 0; i < ndvi_grades.length; i++) {
			color = ndvi_grades[i];
			next_color = ndvi_grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(color) + '"></i> ' +
				color + (next_color ? '&ndash;' + next_color : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);