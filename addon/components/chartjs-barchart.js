import Chart from './chart';

export default Chart.extend ({
  type: 'bar',

  chartOptionsMapping: {
    scalesXAxes: 'scales.xAxes',
    scalesYAxes: 'scales.yAxes',
  }
});
