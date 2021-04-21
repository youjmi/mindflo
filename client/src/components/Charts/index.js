
import React, {useEffect,useState}from "react";
import { Form } from "react-bootstrap"
import ReactApexChart from "react-apexcharts";
import "./style.css";
import API from "../../utils/dashboard"

function Charts() {

    const [charts, setCharts] = useState([]);

    useEffect(() => {
      loadCharts();
      console.log(charts)
    }, []);
  
    const loadCharts = () => {
      API.getDashboards()
        .then(() => setCharts())
        .catch((err) => console.log(err));
        console.log(setCharts)
    }



    const donutseries = [44, 55, 41, 17, 15]
    const donutoptions = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    const pieseries = [44, 55, 13,]
    const pieoptions = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ["Mind","Body","Pamper"],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    const lineseries = [
        {
            name: "Cases",
            data: [
                555,
                12038,
                69030,
                88369,
                167466,
                932638,
                2055423,
                3343777,
                3845718,
            ],
        },
        {
            name: "Recovered",
            data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
        },
        {
            name: "Deaths",
            data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
        },
    ];
    const lineoptions = {
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "1/22/20",
                "2/1/20",
                "2/15/20",
                "3/1/20",
                "3/15/20",
                "4/1/20",
                "4/15/20",
                "5/1/20",
                "5/7/20",
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy",
            },
        },
    };
    const linesseries = [{
        name: "Desktops",
        data: []
    }]
    const linesoptions = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }




    return (

        <div>
            <div id="charts" className="container">
                <div className="row Chart1">
                    <div className="col">
                        <ReactApexChart id="linechart" options={lineoptions} series={lineseries} type="area" height={300} />
                    </div>
                    <div className="col">
                        <ReactApexChart id="linechart2" options={linesoptions} series={linesseries} type="area" height={300} />
                    </div>
                </div>
                <div className="row Chart2">
                    <div className="col">
                        <ReactApexChart id="piechart" options={pieoptions} series={pieseries} type="pie" height={300} />
                    </div>
                    <div className="col">
                        <ReactApexChart className="donutchart" options={donutoptions} series={donutseries} type="donut" height={300} />
                    </div>
                </div>
            </div>


           
        </div>



    )
};

export default Charts;



