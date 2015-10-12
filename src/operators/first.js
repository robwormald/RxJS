var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('../Subscriber');
var tryCatch_1 = require('../util/tryCatch');
var errorObject_1 = require('../util/errorObject');
var EmptyError_1 = require('../util/EmptyError');
function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = first;
var FirstOperator = (function () {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    FirstOperator.prototype.call = function (observer) {
        return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
    };
    return FirstOperator;
})();
var FirstSubscriber = (function (_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
        this.index = 0;
        this.hasCompleted = false;
    }
    FirstSubscriber.prototype._next = function (value) {
        var _a = this, destination = _a.destination, predicate = _a.predicate, resultSelector = _a.resultSelector;
        var index = this.index++;
        var passed = true;
        if (predicate) {
            passed = tryCatch_1.default(predicate)(value, index, this.source);
            if (passed === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
                return;
            }
        }
        if (passed) {
            if (resultSelector) {
                value = tryCatch_1.default(resultSelector)(value, index);
                if (value === errorObject_1.errorObject) {
                    destination.error(errorObject_1.errorObject.e);
                    return;
                }
            }
            destination.next(value);
            destination.complete();
            this.hasCompleted = true;
        }
    };
    FirstSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
            destination.next(this.defaultValue);
            destination.complete();
        }
        else if (!this.hasCompleted) {
            destination.error(new EmptyError_1.default);
        }
    };
    return FirstSubscriber;
})(Subscriber_1.default);
//# sourceMappingURL=first.js.map