
import React, {useEffect,useState}from "react";
import { Form } from "react-bootstrap"
import ReactApexChart from "react-apexcharts";
import "./style.css";
import API from "../../utils/dashboard"
import moment from "moment"



function Charts() {

    const [charts, setCharts] = useState([]);

    useEffect(() => {
      loadCharts();
      console.log(charts)
    }, []);
  
    const loadCharts = () => {
      API.getDashboards()
        .then((res) => setCharts(res.data))
        .catch((err) => console.log(err));
        console.log(setCharts)
         
    }

    const donutseries = [
        charts.filter(chart => chart.selfcare[0].type === "mind").length, 
        charts.filter(chart => chart.selfcare[0].type === "body").length, 
        charts.filter(chart => chart.selfcare[0].type === "pamper").length]
    const donutoptions = {
  labels: ['Mind', 'Body', 'Pamper'],

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
        }],
        title: {
            text: 'Session Types',
            align: 'left',
            // margin: '1px',
            style: {
                fontSize: "30px"
            }
        },
        
    }

    // const pieseries = [, 55, 13, 43, 22]
    // const pieoptions = {
    //     chart: {
    //         width: 380,
    //         type: 'pie',
    //     },
    //     labels: ['Mind Minutes', 'Body Minutes', 'Pamper Minutes'],
    //     responsive: [{
    //         breakpoint: 480,
    //         options: {
    //             chart: {
    //                 width: 200
    //             },
    //             legend: {
    //                 position: 'bottom'
    //             }
    //         }
    //     }]
    // }
    const lineseries = [
    {
        name: "Mind",
        data: charts.filter(chart => chart.selfcare[0].type === "mind")
        .map(chart =>chart.selfcare[0].duration),
    },
    {
        name: "Body",
        data: charts.filter(chart => chart.selfcare[0].type === "body")
        .map(chart =>chart.selfcare[0].duration),
    },
    {
        name: "Pamper",
        data: charts.filter(chart => chart.selfcare[0].type === "pamper")
        .map(chart =>chart.selfcare[0].duration),
    }]
    const lineoptions = {
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        // xaxis: {
        //     type: "datetime",
        //     categories: charts.map(chart => moment(chart.day).format('l')),
        // },
        // tooltip: {
        //     x: {
        //         format: "dd/MM/yy",
        //     },
        // },
        title: {
            className:"chartTitle1",
            text: 'MBP Minutes',
            align: 'center',
            style: {
                fontSize: "30px"
            }
        },
        xaxis: {
            categories: charts.map(chart => moment(chart.day).format('l')),
        }
    };
    const linesseries = [{
        name: "Mood",
        data: charts.map(chart => chart.selfcare[0].mood)
            
            // , 41, 35, 51, 49, 62, 69, 91, 148]
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
            text: 'Your Mood Tracker',
            align: 'center',
            style: {
                fontSize: "30px"
            }
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: charts.map(chart => moment(chart.day).format('l')),
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
                    {/* <div className="col">
                        <ReactApexChart id="piechart" options={pieoptions} series={pieseries} type="pie" height={300} />
                    </div> */}
                    <div className="col">
                        <ReactApexChart 
                        className="donutchart"  id ="donutChart"options={donutoptions} series={donutseries} type="donut" height={300} />
                    </div>
                </div>
            </div>


           
        </div>



    )
};

export default Charts;



