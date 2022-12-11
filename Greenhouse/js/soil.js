import './loader.js'


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(soilPieChart);

let background = '#171721'
let salmon = '#ef7868'
let lightBlue = '#a8ded8'
let orange = '#fbbb5a'
let pink = '#f3c7ec'
let darkBlue = '#17aff8'


function soilPieChart() {

    var data = google.visualization.arrayToDataTable([
        ['mineral', 'percentage'],
        ['nitrogen', 11],
        ['oxygen', 2],
        ['ph', 2],
        ['other', 2],
        ['other', 7]
    ]);

    var options = {
        title: 'soil',
        pieHole: 0.4,
        titleTextStyle: { color: 'grey', fontSize : 15},
        backgroundColor: { fill: 'transparent' }, 
        width: document.getElementById('soil-chart-page').offsetWidth,
        height: document.getElementById('soil-chart-page').offsetHeight,
        pieSliceBorderColor: background, 
        colors : [lightBlue, '#97D8D0', '#82d2ca', '#7acdc3', '#6bc7bc'], 
        legend: {  textStyle: { color: 'grey' }},
    };

    var chart = new google.visualization.PieChart(document.getElementById('soil-chart-page'));
    chart.draw(data, options);
}