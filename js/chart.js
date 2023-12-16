function showValue() {
  loadJSON(function (response) {
    var data = JSON.parse(response);
    var value = last(data).weight;
    var element = document.querySelector('.number');
    element.innerHTML = value;
  });
}

var json = [
  { "date": "2023-12-01", "weight": 116 },
  { "date": "2023-12-02", "weight": 115 },
  { "date": "2023-12-03", "weight": 110 },
  { "date": "2023-12-04", "weight": 115 },
  { "date": "2023-12-05", "weight": 113 },
];

var dates = json.map(function (e) {
  return e.date;
});
var weights = json.map(function (e) {
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
