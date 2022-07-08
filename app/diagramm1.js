var linkOT = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv';
var linkST = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_SBZ.csv';
var currentValue = linkOT;

function handleClick(radio_input) {
  if( radio_input == 0){
    console.log("OT");
    currentValue = linkOT;
    redraw_chart();
  }
  else if(radio_input == 1){
    console.log("ST");
    currentValue = linkST;
    redraw_chart();
  }

  
}

function makeChart(players) {
  
  var playerLabels = players.map(function(d) {
    return d.Name;
  });
  var weeksData = players.map(function(d) {
    return +d.Einkommen;
  });

  var chart = new Chart('chart', {
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
  d3
  .csv(currentValue)
  .then(makeChart); // vorher müsste noch der alte plot entfernt werden, sonst liegen dann meherer übereinander

}

  // Request data using D3
  d3
    .csv(currentValue)
    .then(makeChart); 
    
    /*
    d3
    .csv('https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv')
    .then(makeChart);
    */
