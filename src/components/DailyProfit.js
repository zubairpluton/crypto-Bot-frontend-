import ApexCharts from 'apexcharts'
import { useEffect, useRef } from 'react';

export default function DailyProfit() {
    const isRendered = useRef(null);
          
    var options = {
        series: [{
        name: 'Cash Flow',
        data: [1.45, 5.42,23,32,43,5,5,6,7,7,8,9,9,34,34,34,23,-23,23,-50
        ]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: '#2AB48F'
            }, {
              from: -100,
              to: 0,
              color: '#E06161'
            }]
          },
          columnWidth: '80%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Growth',
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
          '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
          '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
          '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
          '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
          '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
          rotate: -90
        }
      }
      };

    useEffect(() => {
        if (isRendered.current === null) {
            var chart = new ApexCharts(document.querySelector("#daily_profit"), options);
            chart.render();
            isRendered.current = "rendred"
        }
    }, [])
    return <div className='pie-chart-main'>
       
        <div className='chart-flex'>
            <div id="daily_profit" style={{width:'100%'}} className='main-pie-chart'>

            </div>
         
        </div>
    </div>
}