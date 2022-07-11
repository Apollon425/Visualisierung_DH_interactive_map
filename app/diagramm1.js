var linkOT = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv';
var linkST = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_SBZ.csv';
var BevAnteil = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Bev%C3%B6lkerung/Bev%C3%B6lkerungsbestand_Einwohner.csv';
var NDVIOT ='https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/NDVI/2019/ndvi_diagrammOT';
var NDVIST ='https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/NDVI/2019/ndvi_diagrammSB';
var ZufrGes = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Zufriedenheit/ZufriedenheitDiagramm.csv';
var BevST ='https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Bev%C3%B6lkerung/Bev%C3%B6lkerungsbestand_EinwohnerOT.csv';
var BTW21 = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Wahlen/Wahlen_Bundestagswahlen.csv';
var WohnArt = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Wohnen/WohnArt.csv';
var MietS ='https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Wohnen/Grundmiete.csv';

var currentValue = linkOT;

// bind radio buttons to change the value of currentValue:

const radioButtons = document.querySelectorAll('input[name="myRadios"]');
Array.prototype.forEach.call(radioButtons, function(btn) {
  btn.addEventListener('change', function(){
    if(this.value == "linkOT"){
      currentValue = linkOT;
      redraw_chart();
    }
    else if(this.value == "linkST"){
      currentValue = linkST;
      redraw_chart();
    } 
    else if(this.value == "MietS"){
      currentValue = MietS;
      redraw_chart();
    } 
    else if(this.value == "NDVIST"){
      currentValue = NDVIST;
      redraw_chart();
    } 
    else if(this.value == "WohnArt"){
      currentValue = WohnArt;
      redraw_chart();
    } 
    else if(this.value == "BevST"){
      currentValue = BevST;
      redraw_chart();
    } 
    else if(this.value == "BTW21"){
      currentValue = BTW21;
      redraw_chart();
    } 
    else if(this.value == "NDVIOT"){
      currentValue = NDVIOT;
      redraw_chart();
    }    
    else if(this.value == "ZufrGes"){
      currentValue = ZufrGes;
      redraw_chart();
    }
    else if(this.value == "BevAnteil"){
      currentValue = BevAnteil;
      redraw_chart();
    };

  
  });
});

function makeChart(dataLe) {
  

  var dataLabelLE = dataLe.map(function(d) {
    return d.Name;
  });
  var mappedDLE = dataLe.map(function(d) {
    return +d.Einkommen;
  });
  
  chart = new Chart('chart', {
    type: "horizontalBar",
    
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    },
    data: {
      labels: dataLabelLE,
      datasets: [
        {
          data: mappedDLE
        }
      ]
    }
  });
}
  

function redraw_chart(){
  chart.destroy()
  d3
  
  .csv(currentValue)
  .then(makeChart); 

}

  // Request data using D3
  d3
    .csv(currentValue)
    .then(makeChart); 

    d3.s
    
    /*
    d3
    .csv('https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv')
    .then(makeChart);
    */


