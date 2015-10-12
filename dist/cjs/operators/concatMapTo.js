'use strict';

exports.__esModule = true;
exports['default'] = concatMapTo;

var _mergeMapToSupport = require('./mergeMapTo-support');

function concatMapTo(observable, projectResult) {
    return this.lift(new _mergeMapToSupport.MergeMapToOperator(observable, projectResult, 1));
}

module.exports = exports['default'];