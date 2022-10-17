import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function BotProfitPieChart() {
    const isRendered = useRef(null);
    const labels = ['Paid', 'UnPaid'];
    var options = {
        series: [80, 20],
        chart: {
            width: 380,
            type: 'pie',
        },
        fillColor: '#FEB019',
        labels: labels,
        colors: ['#2AB48F', '#E06161'],
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
            <div className='flex-text-between mb-3'>
            <h3 >Charges of Bot on Profit</h3>
            <a href='#' className='gray-anchor'>Details</a>
            </div>
        <div className='chart-flex flex-between-chart'>
            <div id="pie_chart" className='main-pie-chart'>

            </div>
            <div className='paid-labels'>
                <div className='inner'>
                    <i class="fa-solid fa-circle red"></i>
                    <span>{labels[1]}</span>
                </div>
                <div className='inner'>
                    <i class="fa-solid fa-circle green"></i>
                    <span>{labels[0]}</span>
                </div>
            </div>
            <div className='paid-percent'>
                <div className='inner'>
                    <span>20%</span>
                </div>
                <div className='inner'>
                    <span>80%</span>
                </div>
            </div>
        </div>
    </div>
}