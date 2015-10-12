var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('../Subscriber');
var tryCatch_1 = require('../util/tryCatch');
var errorObject_1 = require('../util/errorObject');
var bindCallback_1 = require('../util/bindCallback');
function count(predicate, thisArg) {
    return this.lift(new CountOperator(predicate, thisArg, this));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = count;
var CountOperator = (function () {
    function CountOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber) {
        return new CountSubscriber(subscriber, this.predicate, this.thisArg, this.source);
    };
    return CountOperator;
})();
var CountSubscriber = (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, thisArg, source) {
        _super.call(this, destination);
        this.thisArg = thisArg;
        this.source = source;
        this.count = 0;
        this.index = 0;
        if (typeof predicate === 'function') {
            this.predicate = bindCallback_1.default(predicate, thisArg, 3);
        }
    }
    CountSubscriber.prototype._next = function (value) {
        var predicate = this.predicate;
        var passed = true;
        if (predicate) {
            passed = tryCatch_1.default(predicate)(value, this.index++, this.source);
            if (passed === errorObject_1.errorObject) {
                this.destination.error(passed.e);
                return;
            }
        }
        if (passed) {
            this.count += 1;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
})(Subscriber_1.default);
//# sourceMappingURL=count.js.map