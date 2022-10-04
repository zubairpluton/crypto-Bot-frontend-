import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function PieChart() {
    const isRendered = useRef(null);
    const labels = ['Profit', 'Loss'];
    var options = {
        series: [60, 40],
        chart: {
            width: 380,
            type: 'pie',
        },
        fillColor: '#FEB019',
        labels: labels,
        colors: ['#17963B', '#B00000'],
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
    };

    useEffect(() => {
        if (isRendered.current === null) {
            var chart = new ApexCharts(document.querySelector("#pie_chart"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
        <div className="chart-filter">
            <ul className="ul">
                <li>
                    <a href="javascript::void(0)" className="active">Daily</a>
                </li>
                <li>
                    <a href="javascript::void(0)">Weekly</a>
                </li>
                <li>
                    <a href="javascript::void(0)">15 Days</a>
                </li>
                <li>
                    <a href="javascript::void(0)">30 Days</a>
                </li>
            </ul>
        </div>
        <div className='chart-flex'>
            <div id="pie_chart" className='main-pie-chart'>

            </div>
            <div className='pie-labels'>
                <div>
                    <span>Profit</span>
                    <h3>0000000</h3>
                    <i class="fa-solid fa-caret-up text-green"></i>
                </div>
                <div>
                    <span>Loss</span>
                    <h3>0000000</h3>
                    <i class="fa-solid fa-caret-down text-red"></i>
                </div>
            </div>
        </div>
    </div>
}