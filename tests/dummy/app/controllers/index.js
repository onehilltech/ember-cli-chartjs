import Controller from '@ember/controller';

export default Controller.extend({
  title: 'This is an example line chart.',

  data: Object.assign ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [
        10,
        15,
        40,
        20,
        30,
        25,
        32
      ],
      fill: false,
    }, {
      label: 'My Second dataset',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [
        1,
        19,
        25,
        30,
        20,
        17,
        45
      ],
    }]
  })
});
