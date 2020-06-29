import Chart from './chart';

export default Chart.extend ({
  type: 'bubble',

  classNames: ['chartjs-bubble-chart'],

  chartOptionsMapping: {
    scalesXAxes: 'scales.xAxes',
    scalesYAxes: 'scales.yAxes',
  }
});
