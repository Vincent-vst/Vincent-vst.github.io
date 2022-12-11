import './loader.js'


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(curveChart);

let background = '#171721'
let salmon = '#ef7868'
let lightBlue = '#a8ded8'
let orange = '#fbbb5a'
let pink = '#f3c7ec'
let darkBlue = '#17aff8'



function curveChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'humidity'],
        ['2004', 20],
        ['2005', 30],
        ['2006', 50],
        ['2007', 60]
    ]);

    var options = {
        curveType: 'function',
        legend: { position: 'bottom' ,   textStyle: {
            color: 'grey',
            fontSize: 12}},
        backgroundColor: { fill: 'transparent' }, 
        width: document.getElementById('humidity-chart-page').offsetWidth,
        height: document.getElementById('humidity-chart-page').offsetHeight,
        colors : ['#fbbb5a'], 
        vAxis: { gridlines: { color: 'transparent'} }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('humidity-chart-page'));

    chart.draw(data, options);
}
