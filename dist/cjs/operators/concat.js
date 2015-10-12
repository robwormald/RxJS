'use strict';

exports.__esModule = true;
exports['default'] = concatProto;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Observable = require('../Observable');

var _Observable2 = _interopRequireDefault(_Observable);

function concatProto() {
    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    var args = observables;
    args.unshift(this);
    if (args.length > 1 && typeof args[args.length - 1].schedule === 'function') {
        args.splice(args.length - 2, 0, 1);
    }
    return _Observable2['default'].fromArray(args).mergeAll(1);
}

module.exports = exports['default'];