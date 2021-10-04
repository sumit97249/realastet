export class seoChartData2 {
    public static supportChartData = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#ffba57'],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        data: [4,3,5,6,7,3,2,1,4,5,]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: (seriesName) => 'Ticket '
          }
        },
        marker: {
          show: false
        }
      }
    };
  }
  