import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function ProfitDistribution() {
    const isRendered = useRef(null);
    const labels = ['Profit', 'Loss'];
    var options = {
        series: [
        {
          data: [
            {
              x: 'BTC',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-04').getTime()
              ]
            },
            {
              x: 'ETH',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
           
          ]
        }
      ],
        colors: [ '#E06161'],
        fillColor: '#FEB019',
        chart: {
        height: 200,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: 'datetime'
      }
      };

    useEffect(() => {
        if (isRendered.current === null) {
            var chart = new ApexCharts(document.querySelector("#profit_distribution"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
       
        <div className='chart-flex'>
            <div id="profit_distribution" style={{width:'100%'}} className='main-pie-chart'>

            </div>
         
        </div>
    </div>
}