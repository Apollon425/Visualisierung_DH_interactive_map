standard_base_layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 13,
	minZoom: 5,
	attribution: '© OpenStreetMap'
});

satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 13,
	minZoom: 6,
    subdomains:['mt0','mt1','mt2','mt3']
});

	/* Data */
	ortsteile = L.geoJson(data_ortsteile, {
		style: styleNDVI,
		onEachFeature: onEachFeature
	})

	bezirke = L.geoJson(data_stadtbezirke, {
		style: styleNDVI,
		onEachFeature: onEachFeature
	});

	ortsteile_einkommen = L.geoJson(data_ortsteile, {
		style: styleEinkommen,
		onEachFeature: onEachFeature
	});

	bezirke_einkommen = L.geoJson(data_stadtbezirke, {
		style: styleEinkommen,
		onEachFeature: onEachFeature
	});

	var ortsteile_layer = L.layerGroup([ortsteile]);
	var bezirke_layer = L.layerGroup([bezirke]);
	var ortsteile_layer_einkommen = L.layerGroup([ortsteile_einkommen]);
	var bezirke_layer_einkommen = L.layerGroup([bezirke_einkommen]);


    // initialize map
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
			'<b>' + properties.Name + '</b><br />' + 'NDVI: ' + Number(properties.NDVI).toFixed(2) + '</b><br />' + 'Einkommen: ' + Number(properties.Einkommen).toFixed(0)  : 'Hover over a map section');
	};

	info.addTo(map);

	// get color depending on ndvi value
	function getColorNDVI(d) {
		return 	d > 0.65 ? '#00441b' :
			d > 0.6 ? '#006d2c' :
			d > 0.55 ? '#238b45' :
			d > 0.5 ? '#41ab5d' :
			d > 0.45 ? '#74c476' :
			d > 0.4 ? '#a1d99b' :
			d > 0.35 ? '#c7e9c0' :
			d > 0.3 ? '#e5f5e0':
			d > 0.25 ? '#f7fcf5': '#fcfcfa';

	}

	function getColorEinkommen(d) {
		return 	d > 2100 ? '#641E16' :
			d > 2000 ? '#7B241C' :
			d > 1900 ? '#922B21 ' :
			d > 1800 ? '#A93226' :
			d > 1700 ? '#C0392B' :
			d > 1600 ? '#CD6155' :
			d > 1500 ? '#D98880' :
			d > 1400 ? '#E6B0AA':
			d > 1300 ? '#F2D7D5': '#F9EBEA';

	}

	function styleNDVI(feature) {
		
		return {
			weight: 2,
			opacity: 1,
			color: 'grey',        
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColorNDVI(feature.properties.NDVI)
		};
	}


	function styleEinkommen(feature) {
		
		return {
			weight: 2,
			opacity: 1,
			color: 'grey',        
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColorEinkommen(feature.properties.Einkommen)
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


		info.update(layer.feature.properties);
	}



	function resetHighlight(e) {

		if(map.hasLayer(ortsteile_layer) || map.hasLayer(bezirke_layer) ){
			ortsteile.resetStyle(e.target);
		}
		else if(map.hasLayer(ortsteile_layer_einkommen) || map.hasLayer(bezirke_layer_einkommen) ){
			ortsteile_einkommen.resetStyle(e.target);
		};

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
		"NDVI - Bezirke": bezirke_layer,
		"NDVI - Ortsteile": ortsteile_layer,
		"Einkommen - Bezirke": bezirke_layer_einkommen,
		"Einkommen - Ortsteile": ortsteile_layer_einkommen
	};

    
	var layerControl = L.control.layers(baseMaps).addTo(map);
	var layerControl = L.control.layers(overlayMaps).addTo(map);

	



    /*Legend NDVI*/

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend');
		var ndvi_grades = [0, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65];

		var labels = ['<strong>NDVI color scale</strong>'];
		var color, next_color;

		for (var i = 0; i < ndvi_grades.length; i++) {
			color = ndvi_grades[i];
			next_color = ndvi_grades[i + 1];

			labels.push(
				'<i style="background:' + getColorNDVI(color) + '"></i> ' +
				color + (next_color ? '&ndash;' + next_color : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);
	

	/*Legend income*/

	var legend_einkommen = L.control({position: 'bottomleft'});

	legend_einkommen.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend');
		var income_grades = [0, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100];

		var labels = ['<strong>Income color scale</strong>'];
		var color, next_color;

		for (var i = 0; i < income_grades.length; i++) {
			color = income_grades[i];
			next_color = income_grades[i + 1];

			labels.push(
				'<i style="background:' + getColorEinkommen(color) + '"></i> ' +
				color + (next_color ? '&ndash;' + next_color : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend_einkommen.addTo(map);