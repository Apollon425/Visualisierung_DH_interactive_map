import {select, csv, scalelinear, max, scaleBand} from 'd3';
var linkTL = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/netto_output.csv';
var data = linkTL;


const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data =>  {
    const xValue = d=>d.Nettoeinkommen
    const yValue = d => d.Gebiet

    const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, width]);

     const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, height]);

    svg.selectAll('rect').data(data)
    .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());

};

csv(data).then(data => {data.forEach(d => {d.Nettoeinkommen = +d.Nettoeinkommen;});
    render(data);
});
    // {console.log(data);});


