
const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fep', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


