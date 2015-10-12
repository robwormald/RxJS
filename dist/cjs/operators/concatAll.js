'use strict';

exports.__esModule = true;
exports['default'] = concatAll;

var _mergeAllSupport = require('./mergeAll-support');

function concatAll() {
    return this.lift(new _mergeAllSupport.MergeAllOperator(1));
}

module.exports = exports['default'];