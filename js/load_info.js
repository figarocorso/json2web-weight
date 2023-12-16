function last(array) {
  return array[array.length - 1];
}

function updateNumber(data) {
  var numberElement = document.querySelector('.number');
  numberElement.innerHTML = last(data).weight;
}

function renderChart(data) {
  var dates = data.map(function (e) {
    return e.date;
  });

  var weights = data.map(function (e) {
    return e.weight;
  });
  
  var ctx = document.getElementById('myChart').getContext('2d');
  
  var config = {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Peso en kg',
        data: weights,
        backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }]
    }
  };
  
  var chart = new Chart(ctx, config);
}
$( document ).ready(function() {
  var getUrl = window.location;
  var baseUrl = getUrl.href;
  var weightData = [];
  // $.getJSON(baseUrl + "data/weight.json").then(function (data) {
  //     weightData = data;
  // });

  weightData = [
    { "date": "2023-12-01", "weight": 116 },
    { "date": "2023-12-02", "weight": 115 },
    { "date": "2023-12-03", "weight": 110 },
    { "date": "2023-12-04", "weight": 115 },
    { "date": "2023-12-05", "weight": 112 }
  ];

  updateNumber(weightData);
  renderChart(weightData);
})
