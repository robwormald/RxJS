var Observable_1 = require('../Observable');
function concatProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var args = observables;
    args.unshift(this);
    if (args.length > 1 && typeof args[args.length - 1].schedule === 'function') {
        args.splice(args.length - 2, 0, 1);
    }
    return Observable_1.default.fromArray(args).mergeAll(1);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = concatProto;
//# sourceMappingURL=concat.js.map