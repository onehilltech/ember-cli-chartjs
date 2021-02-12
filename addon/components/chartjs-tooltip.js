import Component from '@glimmer/component';

export default class ChartjsTooltipComponent extends Component {
  get left () {
    return `${this.args.left || 0}px`;
  }

  get top () {
    return `${this.args.top || 0}px`;
  }
}
