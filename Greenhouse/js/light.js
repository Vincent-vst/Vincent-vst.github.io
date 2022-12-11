import './loader.js'


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(lightPieChart);

let background = '#171721'
let salmon = '#ef7868'
let lightBlue = '#a8ded8'
let orange = '#fbbb5a'
let pink = '#f3c7ec'
let darkBlue = '#17aff8'


function lightPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['light', 'Hours per Day'],
        ['morning', 11],
        ['lunch', 2],
        ['afternoon', 2],
        ['evening', 2],
        ['night', 7]
    ]);

    var options = {
        title: 'light',
        pieHole: 0.4,
        titleTextStyle: { color: 'grey', fontSize : 15},
        backgroundColor: { fill: 'transparent' }, 
        width: document.getElementById('light-chart-page').offsetWidth,
        height: document.getElementById('light-chart-page').offsetHeight,
        pieSliceBorderColor: background, 
        colors : [pink, '#F1bce8', '#edabe2', '#ea9adc','#e689d7'], 
        legend: {  textStyle: { color: 'grey' }},
    };

    var chart = new google.visualization.PieChart(document.getElementById('light-chart-page'));
    chart.draw(data, options);
}