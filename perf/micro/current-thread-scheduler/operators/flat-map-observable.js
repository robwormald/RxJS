var RxOld = require("rx");
var RxNew = require("../../../../index");

module.exports = function (suite) {

    var oldFlatMapWithCurrentThreadScheduler = RxOld.Observable.range(0, 25, RxOld.Scheduler.currentThread).flatMap(RxOld.Observable.range(0, 25, RxOld.Scheduler.currentThread));
    var newFlatMapWithCurrentThreadScheduler = RxNew.Observable.range(0, 25, RxNew.Scheduler.immediate).flatMapTo(RxNew.Observable.range(0, 25, RxNew.Scheduler.immediate));

    return suite
        .add('old flatMap (Observable) with current thread scheduler', function () {
            oldFlatMapWithCurrentThreadScheduler.subscribe(_next, _error, _complete);
        })
        .add('new flatMap (Observable) with current thread scheduler', function () {
            newFlatMapWithCurrentThreadScheduler.subscribe(_next, _error, _complete);
        });
    function _next(x) { }
    function _error(e){ }
    function _complete(){ }
};