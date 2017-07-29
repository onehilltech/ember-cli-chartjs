// blueprints/ember-cli-chartjs/index.js

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addAddonsToProject ({
      packages: [
        {name: 'ember-cli-moment-shim', target: '^3.3.3'}
      ]
    })
    .then (() => {
      return this.addBowerPackagesToProject([
        {name: 'chart.js', target: '^2.6.0'}
      ]);
    });
  }
};
