import Chart from './chart';

export default Chart.extend ({
  type: 'line',

  classNames: ['chartjs-line-chart'],

  chartOptionsMapping: {
    scalesXAxes: 'scales.xAxes',
    scalesYAxes: 'scales.yAxes',
  }
});
