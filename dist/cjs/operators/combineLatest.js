'use strict';

exports.__esModule = true;
exports['default'] = combineLatest;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _observablesArrayObservable = require('../observables/ArrayObservable');

var _observablesArrayObservable2 = _interopRequireDefault(_observablesArrayObservable);

var _combineLatestSupport = require('./combineLatest-support');

function combineLatest() {
    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    observables.unshift(this);
    var project = undefined;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    return new _observablesArrayObservable2['default'](observables).lift(new _combineLatestSupport.CombineLatestOperator(project));
}

module.exports = exports['default'];