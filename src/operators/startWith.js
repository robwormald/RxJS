var ArrayObservable_1 = require('../observables/ArrayObservable');
var ScalarObservable_1 = require('../observables/ScalarObservable');
var EmptyObservable_1 = require('../observables/EmptyObservable');
var concat_static_1 = require('./concat-static');
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (scheduler && typeof scheduler.schedule === 'function') {
        array.pop();
    }
    else {
        scheduler = void 0;
    }
    var len = array.length;
    if (len === 1) {
        return concat_static_1.default(new ScalarObservable_1.default(array[0], scheduler), this);
    }
    else if (len > 1) {
        return concat_static_1.default(new ArrayObservable_1.default(array, scheduler), this);
    }
    else {
        return concat_static_1.default(new EmptyObservable_1.default(scheduler), this);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = startWith;
//# sourceMappingURL=startWith.js.map