import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function Winrate() {
    const isRendered = useRef(null);
    const labels = ['Profit','Loss','Break-Even'];
    var options = {
        series: [40, 40, 20],
        chart: {
        type: 'donut',
      },
      labels: labels,
      colors: ['#2AB48F', '#E06161','#838282'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

    useEffect(() => {
        if (isRendered.current === null) {
            var chart = new ApexCharts(document.querySelector("#winrate_chart"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
 
<div className='chart-flex flex-between-chart'>
    <div id="winrate_chart" className='main-pie-chart'>

    </div>
    <div className='paid-labels mobile-none'>
        <div className='inner'>
            <i class="fa-solid fa-circle green"></i>
            <span>{labels[0]}</span>
        </div>
        <div className='inner'>
            <i class="fa-solid fa-circle red"></i>
            <span>{labels[1]}</span>
        </div>
        <div className='inner'>
            <i class="fa-solid fa-circle gray"></i>
            <span>{labels[2]}</span>
        </div>
    </div>
    <div className='paid-percent mobile-none'>
        <div className='inner'>
            <span>40%</span>
        </div>
        <div className='inner'>
            <span>40%</span>
        </div>
        <div className='inner'>
            <span>20%</span>
        </div>
    </div>
</div>
</div>
}