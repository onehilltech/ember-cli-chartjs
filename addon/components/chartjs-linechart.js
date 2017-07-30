import Ember from 'ember';
import Chart from './chart';

export default Chart.extend ({
  type: 'line',

  chartOptionsMapping: {
    scalesXAxes: 'scales.xAxes',
    scalesYAxes: 'scales.yAxes',
  }
});
