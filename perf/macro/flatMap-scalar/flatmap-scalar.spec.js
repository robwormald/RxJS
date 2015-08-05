var benchpress = require('benchpress');
var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(20),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(false)
]);

describe('flatMap comparison', function () {
  [
    1000,
    10000
  ].forEach(function (val) {
    it('should be fast in Rx2', function (done) {
      browser.ignoreSynchronization = true;
      browser.get('http://localhost:8080/perf/macro/flatMap-scalar/index.html?iterations=' + val);
      runner.sample({
        id: 'flatMap-range-to-scalar Rx2',
        execute: function () {
          $('#rx-2-flatmap-range-to-scalar').click();
        },
        bindings: [
          benchpress.bind(benchpress.Options.SAMPLE_DESCRIPTION).toValue({
            iterations: val
          })
        ]
      }).then(done, done.fail);
    });

    it('should be fast in RxNext', function (done) {
      browser.ignoreSynchronization = true;
      browser.get('http://localhost:8080/perf/macro/flatMap-scalar/index.html?iterations=' + val);
      runner.sample({
        id: 'flatMap-range-to-scalar RxNext',
        execute: function () {
          $('#rx-3-flatmap-range-to-scalar').click();
        },
        bindings: [
          benchpress.bind(benchpress.Options.SAMPLE_DESCRIPTION).toValue({
            iterations: val
          })
        ]
      }).then(done, done.fail);
    });
  });
});