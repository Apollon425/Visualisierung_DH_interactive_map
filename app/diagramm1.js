var linkOT = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv';
var linkST = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_SBZ.csv';
var BevAnteil = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Bev%C3%B6lkerung/Bev%C3%B6lkerungsbestand_Einwohner.csv';
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
    else if(this.value == "BevAnteil"){
      currentValue = BevAnteil;
      redraw_chart();
    };

  
  });
});

function makeChart(players) {
  

  var playerLabels = players.map(function(d) {
    return d.Name;
  });
  var weeksData = players.map(function(d) {
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
      labels: playerLabels,
      datasets: [
        {
          data: weeksData
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


