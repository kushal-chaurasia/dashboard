var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Successful Transaction', 'Failed Transaction'],
        datasets: [{
            label : "Total Transaction",
            backgroundColor: 'rgb(91, 192, 222)',
            data: [30,20]
            
        }]
    },

    // Configuration options go here
    options: {
        responsive :false,
    }
});


