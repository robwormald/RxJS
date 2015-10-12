'use strict';

exports.__esModule = true;
exports['default'] = concatMap;

var _mergeMapSupport = require('./mergeMap-support');

function concatMap(project, projectResult) {
    return this.lift(new _mergeMapSupport.MergeMapOperator(project, projectResult, 1));
}

module.exports = exports['default'];