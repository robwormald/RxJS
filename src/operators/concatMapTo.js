var mergeMapTo_support_1 = require('./mergeMapTo-support');
function concatMapTo(observable, projectResult) {
    return this.lift(new mergeMapTo_support_1.MergeMapToOperator(observable, projectResult, 1));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map