// Using papaParse in order to parse through our data in the CSV and convert it to JSON 
function createGraphOne(){
    var data = "";
    var client = new XMLHttpRequest();
    client.open('GET', './metric_two_subset.csv');
    client.onreadystatechange = function () {
        data = client.responseText;
        Papa.parse(new File([data], './test.csv'), {
            complete: function (results) {
                console.log(results["data"]);
                metricTwo(results["data"]);
            }
        });
    }
    client.send();
}


function metricTwo(data) {

    // Creating two arrays, one for our labels and the other for our data to be plotted.
    var batallion = [];
    var average_response_time = [];

    // Parsing through the data provided by the Papa Parse function 
    // and fill arrays with respective values. 
    for (var i = 1; i < data.length; i++) {
        batallion.push(data[i][0]);
        average_response_time.push(data[i][1]);
    }

    // Using chart.JS in order to plot and display our graph visually
    // Then selecting features we want to show with our graph. 
    let myChart = document.getElementById('myChart').getContext('2d');
    let massPopChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: batallion,
            datasets: [{
                label: 'Average Response Time',
                backgroundColor: '#BA160C',
                data: average_response_time,
            }]
        },
        options: {
            responsive: true,
            title:{
                display: false, 
                text: 'Average Response Time in Minutes vs. Batallions of San Francsico'

            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Average Response Time in Minutes'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Batallions of San Francisco'
                    }
                }]
            }
        }
    });
}
                    
                       