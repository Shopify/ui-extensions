onmessage  =function(e) {
  postMessage({
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,188,245, 0.5)',
            borderColor: '#5C6AC4',
            data: [15, 10, 5, 2, 20, 30, 45]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(227,208,255, 0.5)',
            borderColor: '#9C6ADE',
            data: [20, 24, 48, 27, 32, 32, 18]
        }
      ]
    },

    // Configuration options go here
    options: {}
  })
}
