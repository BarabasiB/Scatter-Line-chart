
//chart colors
var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)',
  black: 'rgb(0,0,0)'
};
//data for chart
var chartData = [];
//chart configuration
var config = {
  type: 'scatter',
  data: {
    datasets: [{
      label: "Your generated points",
      backgroundColor: chartColors.red,
      borderColor: chartColors.red,
      data: chartData,
      fill: false,
    }]
  },
  options: {
    responsive: false,
    animation: {
      easing: 'linear'
    },
    title: {
      display: true,
      text: 'Line Chart using Chart.js'
    },
    tooltips: {
      mode: 'label',
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      color: chartColors.red
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        gridLines:{
          //display: false,
          color: chartColors.black,
          zeroLineColor: chartColors.black
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        gridLines:{
          //display: false,
          color: chartColors.black,
          zeroLineColor: chartColors.black
        } 
      }],
      
    }
  }
};
//creating chart
var canvas = document.getElementById("chart").getContext("2d");
window.myLine = new Chart(canvas, config);

function randomIntFromInterval(min,max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var startButton = document.getElementById("start");
startButton.addEventListener('click', addPoints);

var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', function(){
  chartData.length = 0;
  window.myLine.update();
});

function addPoints(){
  
  var nrdata = parseInt(document.getElementById("nr").value);
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  for(let i = 1; i <= nrdata; i++)
  {
    var x = randomIntFromInterval(min,max);
    var y = randomIntFromInterval(min,max);
    var point = {x, y};
    chartData.push(point);  
    //window.myLine.update(); 
  }
   window.myLine.update(); 
}

function addAscendingPoints(){
  
  var nrdata = parseInt(document.getElementById("nr").value);
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  if(chartData.length){
    min = chartData[chartData.length - 1].x;
  }

   var x, y;

  for(let i = 1; i <= nrdata; i++)
  {
    x = randomIntFromInterval(min,max);
    y = randomIntFromInterval(min,max);
    var point = {x, y};
    chartData.push(point);
    min = point.x;
    max += point.x;
  }
   window.myLine.update();
}




