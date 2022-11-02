import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function AssetAllocation() {
    const isRendered = useRef(null);
    const labels = ['ETH','BTC'];
    var options = {
        series: [95, 5],
        chart: {
        type: 'donut',
      },
      labels: labels,
      colors: ['#5688ed', '#2AB48F'],
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
            var chart = new ApexCharts(document.querySelector("#asset_chart"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
 
<div className='chart-flex flex-between-chart'>
    <div id="asset_chart" className='main-pie-chart'>

    </div>
    <div className='paid-labels mobile-none'>
        <div className='inner'>
            <i class="fa-solid fa-circle blue"></i>
            <span>{labels[0]}</span>
        </div>
        <div className='inner'>
            <i class="fa-solid fa-circle green"></i>
            <span>{labels[1]}</span>
        </div>
     
    </div>
    <div className='paid-percent mobile-none'>
        <div className='inner'>
            <span>95%</span>
        </div>
        <div className='inner'>
            <span>5%</span>
        </div>
      
    </div>
</div>
</div>
}