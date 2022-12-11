import './loader.js'


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(temperatureCloudChart);

let background = '#171721'
let salmon = '#ef7868'
let lightBlue = '#a8ded8'
let orange = '#fbbb5a'
let pink = '#f3c7ec'
let darkBlue = '#17aff8'


function temperatureCloudChart() {
    var data = google.visualization.arrayToDataTable([
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options = {
        title: 'temperature',
        titleTextStyle: { color: 'grey', fontSize : 15},
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
        backgroundColor: { fill: 'transparent' }, 
        width: document.getElementById('cloud-chart-page').offsetWidth,
        height: document.getElementById('cloud-chart-page').offsetHeight,
        colors : [salmon], 
        hAxis : {gridlines : {color : background}}, 
        vAxis : {gridlines : {color : background}}
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('cloud-chart-page'));
    // var chart = new google.visualization.ScatterChart(document.getElementById('cloud-chart-page'));

    chart.draw(data, options);
}