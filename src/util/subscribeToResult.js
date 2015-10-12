var Observable_1 = require('../Observable');
var Symbol_iterator_1 = require('../util/Symbol_iterator');
var Symbol_observable_1 = require('../util/Symbol_observable');
var InnerSubscriber_1 = require('../InnerSubscriber');
var isArray = Array.isArray;
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.default(outerSubscriber, outerValue, outerIndex);
    if (destination.isUnsubscribed) {
        return;
    }
    if (result instanceof Observable_1.default) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return;
        }
        else {
            return result.subscribe(destination);
        }
    }
    if (isArray(result)) {
        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
            destination.next(result[i]);
        }
        if (!destination.isUnsubscribed) {
            destination.complete();
        }
    }
    else if (typeof result.then === 'function') {
        result.then(function (x) {
            if (!destination.isUnsubscribed) {
                destination.next(x);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (typeof result[Symbol_iterator_1.default] === 'function') {
        for (var _i = 0; _i < result.length; _i++) {
            var item_1 = result[_i];
            destination.next(item_1);
            if (destination.isUnsubscribed) {
                break;
            }
        }
        if (!destination.isUnsubscribed) {
            destination.complete();
        }
    }
    else if (typeof result[Symbol_observable_1.default] === 'function') {
        var obs = result[Symbol_observable_1.default]();
        if (typeof obs.subscribe !== 'function') {
            destination.error('invalid observable');
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.default(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        destination.error(new TypeError('unknown type returned'));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map