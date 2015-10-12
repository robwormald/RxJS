'use strict';

exports.__esModule = true;
exports['default'] = concat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Observable = require('../Observable');

var _Observable2 = _interopRequireDefault(_Observable);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

function concat() {
    var scheduler = _schedulersImmediate2['default'];

    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    var args = observables;
    var len = args.length;
    if (typeof args[observables.length - 1].schedule === 'function') {
        scheduler = args.pop();
        args.push(1, scheduler);
    }
    return _Observable2['default'].fromArray(observables).mergeAll(1);
}

module.exports = exports['default'];