import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function TotalProfit() {
    const isRendered = useRef(null);
          
     
    var options = {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
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
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
      };


    useEffect(() => {
        if (isRendered.current === null) {
            var chart = new ApexCharts(document.querySelector("#total_profit"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
       
        <div className='chart-flex'>
            <div id="total_profit" style={{width:'100%'}} className='main-pie-chart'>

            </div>
         
        </div>
    </div>
}