

    var dataPoints = [];
     
    function getDataPointsFromCSV(csv) {
        var dataPoints = csvLines = points = [];
        csvLines = csv.split(/[\r?\n|\r|\n]+/);
            
        for (var i = 0; i < csvLines.length; i++)
            if (csvLines[i].length > 0) {
                points = csvLines[i].split(",");
                dataPoints.push({ 
                    x: parseFloat(points[0]), 
                    y: parseFloat(points[1]) 		
    	    });
    	}
        return dataPoints;
    }
    	 
    $.get("https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Zufriedenheit/Stadtverwaltung%2C%20Kommunalpolitik%20und%20Kommunalfinanzen_Zufriedenheit%20mit%20den%20Lebensbedingungen.csv", function(data) {
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
    	    text: "Chart from CSV",
            },
            data: [{
    	    type: "line",
    	    dataPoints: getDataPointsFromCSV(data)
    	}]
        });
    		
        chart.render();
     
    });
     

