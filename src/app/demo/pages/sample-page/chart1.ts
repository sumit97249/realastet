export class seoChartData1 {
    public static supportChartData = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#4680ff'],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        data: [5,56,75,34,754,747,53,434,256,45,4]
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
  