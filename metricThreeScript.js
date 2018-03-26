// Using papaParse to go through csv and conver to JSON 
function grapher(){
    var data = "";
    var client = new XMLHttpRequest();
    client.open('GET', './metric_three_subset.csv');
    client.onreadystatechange = function () {
        data = client.responseText;
        Papa.parse(new File([data], './test.csv'), {
            complete: function (results) {
                console.log(results["data"]);
                createGraphThree(results["data"]);
            }
        });
    }
    client.send();
}

function createGraphThree(data) {

    // Creating array to store zip codes and seperate area to store average_response_time 
    // which is our data that has been calculated in the csv
    var zip_code = [];
    var average_response_time = [];

    //Pushing data into their respective arrays
    // Essentially filling zip_code array with our x-axis labels 
    // And average_response_time with our data 
    for (var i = 1; i < data.length; i++) {
        zip_code.push(data[i][0]);
        average_response_time.push(data[i][1]);
    }

    // Creating the chart using chart.JS 
    // And then selecting which features we want to be displayed on the graph. 
    let chartThree = document.getElementById('chartThree').getContext('2d');
    let massPopChart = new Chart(chartThree, {
        type: 'bar',
        data: {
            labels: zip_code,
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
                text: 'Average Response Time in Minutes vs. Zip Code'

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
                        labelString: 'Zip Code'
                    }
                }]
            }
        }
    });
}
                    
                       