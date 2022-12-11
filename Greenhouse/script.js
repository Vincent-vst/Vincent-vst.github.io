import './js/loader.js'

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(curveChart);
google.charts.setOnLoadCallback(temperatureCloudChart);
google.charts.setOnLoadCallback(soilPieChart);
google.charts.setOnLoadCallback(lightPieChart);

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
        width: document.getElementById('curve-chart').offsetWidth,
        height: document.getElementById('curve-chart').offsetHeight,
        colors : ['#fbbb5a'], 
        vAxis: { gridlines: { color: 'transparent'} }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('curve-chart'));

    chart.draw(data, options);
}


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
        title: 'soil composition',
        pieHole: 0.4,
        titleTextStyle: { color: 'grey', fontSize : 15},
        backgroundColor: { fill: 'transparent' }, 
        width: document.getElementById('pie-chart-soil').offsetWidth,
        height: document.getElementById('pie-chart-soil').offsetHeight,
        colors : [lightBlue, '#97D8D0', '#82d2ca', '#7acdc3', '#6bc7bc'], 
        pieSliceBorderColor: background, 
        legend: {  textStyle: { color: 'grey' }},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie-chart-soil'));
    chart.draw(data, options);
}

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
        width: document.getElementById('pie-chart-light').offsetWidth,
        height: document.getElementById('pie-chart-light').offsetHeight,
        pieSliceBorderColor: background, 
        colors : [pink, '#F1bce8', '#edabe2', '#ea9adc','#e689d7'], 
        legend: {  textStyle: { color: 'grey' }},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie-chart-light'));
    chart.draw(data, options);
}

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
        width: document.getElementById('cloud-chart-temperature').offsetWidth,
        height: document.getElementById('cloud-chart-temperature').offsetHeight,
        colors : [salmon], 
        hAxis : {gridlines : {color : background}}, 
        vAxis : {gridlines : {color : background}}
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('cloud-chart-temperature'));
    // var chart = new google.visualization.ScatterChart(document.getElementById('cloud-chart-page'));

    chart.draw(data, options);
}

document.getElementById("menu-button").addEventListener("click", hideNav, false)

function hideNav(){
    if (document.getElementById('nav').style.display == 'flex'){
        document.getElementById('nav').style.display = "none" 
        document.getElementById('main').style.width = "100%"
        document.getElementById('main').style.marginLeft = "20px"
    }else {
        document.getElementById('nav').style.display = "flex"
    }
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
(object).style.cursor = 'none'