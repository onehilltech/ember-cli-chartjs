import Chart from './chart';

export default Chart.extend ({
  type: 'bar',

  classNames: ['chartjs-bar-chart'],

  chartOptionsMapping: {
    scalesXAxes: 'scales.xAxes',
    scalesYAxes: 'scales.yAxes',
  }
});
