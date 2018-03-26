// Using papaParse in order to parse through CSV and convert to JSON
function createGraph(){
    var data = "";
    var client = new XMLHttpRequest();
    client.open('GET', './metric_one_subset.csv');
    client.onreadystatechange = function () {
        data = client.responseText;
        Papa.parse(new File([data], './test.csv'), {
            complete: function (results) {
                console.log(results["data"]);
                createGraphOne(results["data"]);
            }
        });
    }
    client.send();
}

function createGraphOne(data) {

    // Creating an array for each of the call_types
    var time = [];
    var overallDataset = [];
    var alarm_frequency = [];
    var citizen_frequency = [];
    var electrical_hazard_frequency = [];
    var elevator_frequency = [];
    var fuel_spill_frequency = [];
    var gas_leak_frequency = [];
    var hazmat_frequency = [];
    var medical_frequency = [];
    var odor_frequency = [];
    var other_frequency = [];
    var outside_fire_frequency = [];
    var smoke_frequency = [];
    var structure_frequency = [];
    var traffic_frequecy = [];
    var train_frequency = [];
    var vehicle_frequency = [];
    var water_frequency = [];

    // Adding the time variables to be used by chart.JS
    for (var i = 1; i < 25; i++) {
        time.push(data[i][1]);
    }

    // Adding relevant data to corresponding call_type based upon position in CSV 
    for (var j = 1; j < data.length; j++) {

        if (j >= 1 && j < 25) {
            alarm_frequency.push(data[j][2])
        }
        if (j >= 25 && j < 49) {
            citizen_frequency.push(data[j][2])
        }
        if (j >= 49 && j < 73) {
            electrical_hazard_frequency.push(data[j][2])
        }
        if (j >= 73 && j < 97) {
            elevator_frequency.push(data[j][2])
        }
        if (j >= 97 && j < 121) {
            fuel_spill_frequency.push(data[j][2])
        }
        if (j >= 121 && j < 145) {
            gas_leak_frequency.push(data[j][2])
        }
        if (j >= 145 && j < 169) {
            hazmat_frequency.push(data[j][2])
        }
        if (j >= 169 && j < 193) {
            medical_frequency.push(data[j][2])
        }
        if (j >= 193 && j < 217) {
            odor_frequency.push(data[j][2])
        }
        if (j >= 217 && j < 241) {
            other_frequency.push(data[j][2])
        }
        if (j >= 241 && j < 265) {
            outside_fire_frequency.push(data[j][2])
        }
        if (j >= 265 && j < 289) {
            smoke_frequency.push(data[j][2])
        }
        if (j >= 289 && j < 313) {
            structure_frequency.push(data[j][2])
        }
        if (j >= 313 && j < 337) {
            traffic_frequecy.push(data[j][2])
        }
        if (j >= 337 && j < 361) {
            train_frequency.push(data[j][2])
        }
        if (j >= 361 && j < 385) {
            vehicle_frequency.push(data[j][2])
        }
        if (j >= 385 && j < 409) {
            water_frequency.push(data[j][2])
        }


    }

    // Creating the graph through the use of chart.JS and selecting features for the graph. 
    console.log(time);
    let chartOne = document.getElementById('chartOne').getContext('2d');
    let metricTwo = new Chart(chartOne, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Alarm Incidents',
                fill: false,
                backgroundColor: '#519925',
                borderColor: '#519925',
                data: alarm_frequency,
            }, {
                label: 'Citizen Assist / Service Calls',
                fill: false,
                backgroundColor: '#d09017',
                borderColor: '#d09017',
                data: citizen_frequency,
            }, {
                label: 'Electrical Hazards',
                fill: false,
                backgroundColor: '#9001f4',
                borderColor: '#9001f4',
                data: electrical_hazard_frequency,
            }, {
                label: 'Elevator / Escalator Rescues',
                fill: false,
                backgroundColor: '#b4dca2',
                borderColor: '#b4dca2',
                data: elevator_frequency,
            }, {
                label: 'Fuel Spills',
                fill: false,
                backgroundColor: '#14eaad',
                borderColor: '#14eaad',
                data: fuel_spill_frequency,
            }, {
                label: 'Gas Leaks',
                fill: false,
                backgroundColor: '#e4351d',
                borderColor: '#e4351d',
                data: gas_leak_frequency,

            }, {
                label: 'Hazmats',
                fill: false,
                backgroundColor: '#6b6fbe',
                borderColor: '#6b6fbe',
                data: hazmat_frequency,

            }, {
                label: 'Medical Incidents',
                fill: false,
                backgroundColor: '#ff907e',
                borderColor: '#ff907e',
                data: medical_frequency,

            }, {
                label: 'Odor Incidents',
                fill: false,
                backgroundColor: '#a5f535',
                borderColor: '#a5f535',
                data: odor_frequency,
            }, {
                label: "Other Incidents",
                fill: false,
                backgroundColor: '#a5f535',
                borderColor: '#a5f535',
                data: other_frequency,
            }, {
                label: "Outside Fires",
                fill: false,
                backgroundColor: '##845b99',
                borderColor: '##845b99',
                data: outside_fire_frequency,

            }, {
                label: "Smoke Investigations",
                fill: false,
                backgroundColor: '#2244e7',
                borderColor: '#2244e7',
                data: smoke_frequency,
            }, {
                label: "Structure Fires",
                fill: false,
                backgroundColor: '#1e0715',
                borderColor: '#1e0715',
                data: structure_frequency,
            }, {
                label: "Traffic Collisions",
                fill: false,
                backgroundColor: '#bd4461',
                borderColor: '#bd4461',
                data: traffic_frequecy,
            }, {
                label: "Train / Rail Incidents",
                fill: false,
                backgroundColor: '#ed8bcd',
                borderColor: '#ed8bcd',
                data: train_frequency,
            }, {
                label: "Vehicle Fires",
                fill: false,
                backgroundColor: '#3a0c8e',
                borderColor: '#3a0c8e',
                data: vehicle_frequency,

            }, {
                label: "Water Rescues",
                fill: false,
                backgroundColor: '#2478ab',
                borderColor: '#2478ab',
                data: water_frequency,
            }]
        },
        // Selecting features for the graph, such as whether to display the legend or not. 
        options: {
            responsive:true,
            title: {
                display: false, 
                text: 'Frequency of Incident vs. Time of Day',

            },
            legend: {
                display: false,
                position: 'bottom',
            },
            pan: {
                enabled: true,
                mode: 'x',
             },
            zoom:{
                enabled: true, 
                mode: 'x',
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Frequency of Occurence'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time of Day'
                    }
                }]
            }
        }
    });
}


