'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Observable = require('./Observable');

var _Observable2 = _interopRequireDefault(_Observable);

var _operatorsCombineLatestStatic = require('./operators/combineLatest-static');

var _operatorsCombineLatestStatic2 = _interopRequireDefault(_operatorsCombineLatestStatic);

var _operatorsConcatStatic = require('./operators/concat-static');

var _operatorsConcatStatic2 = _interopRequireDefault(_operatorsConcatStatic);

var _observablesDeferObservable = require('./observables/DeferObservable');

var _observablesDeferObservable2 = _interopRequireDefault(_observablesDeferObservable);

var _observablesEmptyObservable = require('./observables/EmptyObservable');

var _observablesEmptyObservable2 = _interopRequireDefault(_observablesEmptyObservable);

var _observablesForkJoinObservable = require('./observables/ForkJoinObservable');

var _observablesForkJoinObservable2 = _interopRequireDefault(_observablesForkJoinObservable);

var _observablesFromObservable = require('./observables/FromObservable');

var _observablesFromObservable2 = _interopRequireDefault(_observablesFromObservable);

var _observablesArrayObservable = require('./observables/ArrayObservable');

var _observablesArrayObservable2 = _interopRequireDefault(_observablesArrayObservable);

var _observablesFromEventObservable = require('./observables/FromEventObservable');

var _observablesFromEventObservable2 = _interopRequireDefault(_observablesFromEventObservable);

var _observablesFromEventPatternObservable = require('./observables/FromEventPatternObservable');

var _observablesFromEventPatternObservable2 = _interopRequireDefault(_observablesFromEventPatternObservable);

var _observablesPromiseObservable = require('./observables/PromiseObservable');

var _observablesPromiseObservable2 = _interopRequireDefault(_observablesPromiseObservable);

var _observablesIntervalObservable = require('./observables/IntervalObservable');

var _observablesIntervalObservable2 = _interopRequireDefault(_observablesIntervalObservable);

var _operatorsMergeStatic = require('./operators/merge-static');

var _operatorsMergeStatic2 = _interopRequireDefault(_operatorsMergeStatic);

var _observablesInfiniteObservable = require('./observables/InfiniteObservable');

var _observablesInfiniteObservable2 = _interopRequireDefault(_observablesInfiniteObservable);

var _observablesRangeObservable = require('./observables/RangeObservable');

var _observablesRangeObservable2 = _interopRequireDefault(_observablesRangeObservable);

var _observablesErrorObservable = require('./observables/ErrorObservable');

var _observablesErrorObservable2 = _interopRequireDefault(_observablesErrorObservable);

var _observablesTimerObservable = require('./observables/TimerObservable');

var _observablesTimerObservable2 = _interopRequireDefault(_observablesTimerObservable);

var _operatorsZipStatic = require('./operators/zip-static');

var _operatorsZipStatic2 = _interopRequireDefault(_operatorsZipStatic);

var _operatorsBuffer = require('./operators/buffer');

var _operatorsBuffer2 = _interopRequireDefault(_operatorsBuffer);

var _operatorsBufferCount = require('./operators/bufferCount');

var _operatorsBufferCount2 = _interopRequireDefault(_operatorsBufferCount);

var _operatorsBufferTime = require('./operators/bufferTime');

var _operatorsBufferTime2 = _interopRequireDefault(_operatorsBufferTime);

var _operatorsBufferToggle = require('./operators/bufferToggle');

var _operatorsBufferToggle2 = _interopRequireDefault(_operatorsBufferToggle);

var _operatorsBufferWhen = require('./operators/bufferWhen');

var _operatorsBufferWhen2 = _interopRequireDefault(_operatorsBufferWhen);

var _operatorsCatch = require('./operators/catch');

var _operatorsCatch2 = _interopRequireDefault(_operatorsCatch);

var _operatorsCombineAll = require('./operators/combineAll');

var _operatorsCombineAll2 = _interopRequireDefault(_operatorsCombineAll);

var _operatorsCombineLatest = require('./operators/combineLatest');

var _operatorsCombineLatest2 = _interopRequireDefault(_operatorsCombineLatest);

var _operatorsConcat = require('./operators/concat');

var _operatorsConcat2 = _interopRequireDefault(_operatorsConcat);

var _operatorsConcatAll = require('./operators/concatAll');

var _operatorsConcatAll2 = _interopRequireDefault(_operatorsConcatAll);

var _operatorsConcatMap = require('./operators/concatMap');

var _operatorsConcatMap2 = _interopRequireDefault(_operatorsConcatMap);

var _operatorsConcatMapTo = require('./operators/concatMapTo');

var _operatorsConcatMapTo2 = _interopRequireDefault(_operatorsConcatMapTo);

var _operatorsCount = require('./operators/count');

var _operatorsCount2 = _interopRequireDefault(_operatorsCount);

var _operatorsDematerialize = require('./operators/dematerialize');

var _operatorsDematerialize2 = _interopRequireDefault(_operatorsDematerialize);

var _operatorsDebounce = require('./operators/debounce');

var _operatorsDebounce2 = _interopRequireDefault(_operatorsDebounce);

var _operatorsDefaultIfEmpty = require('./operators/defaultIfEmpty');

var _operatorsDefaultIfEmpty2 = _interopRequireDefault(_operatorsDefaultIfEmpty);

var _operatorsDelay = require('./operators/delay');

var _operatorsDelay2 = _interopRequireDefault(_operatorsDelay);

var _operatorsDistinctUntilChanged = require('./operators/distinctUntilChanged');

var _operatorsDistinctUntilChanged2 = _interopRequireDefault(_operatorsDistinctUntilChanged);

var _operatorsExtendedDistinctUntilKeyChanged = require('./operators/extended/distinctUntilKeyChanged');

var _operatorsExtendedDistinctUntilKeyChanged2 = _interopRequireDefault(_operatorsExtendedDistinctUntilKeyChanged);

var _operatorsDo = require('./operators/do');

var _operatorsDo2 = _interopRequireDefault(_operatorsDo);

var _operatorsExtendedElementAt = require('./operators/extended/elementAt');

var _operatorsExtendedElementAt2 = _interopRequireDefault(_operatorsExtendedElementAt);

var _operatorsExpand = require('./operators/expand');

var _operatorsExpand2 = _interopRequireDefault(_operatorsExpand);

var _operatorsFilter = require('./operators/filter');

var _operatorsFilter2 = _interopRequireDefault(_operatorsFilter);

var _operatorsExtendedFind = require('./operators/extended/find');

var _operatorsExtendedFind2 = _interopRequireDefault(_operatorsExtendedFind);

var _operatorsExtendedFindIndex = require('./operators/extended/findIndex');

var _operatorsExtendedFindIndex2 = _interopRequireDefault(_operatorsExtendedFindIndex);

var _operatorsFinally = require('./operators/finally');

var _operatorsFinally2 = _interopRequireDefault(_operatorsFinally);

var _operatorsFirst = require('./operators/first');

var _operatorsFirst2 = _interopRequireDefault(_operatorsFirst);

var _operatorsGroupBy = require('./operators/groupBy');

var _operatorsIgnoreElements = require('./operators/ignoreElements');

var _operatorsIgnoreElements2 = _interopRequireDefault(_operatorsIgnoreElements);

var _operatorsExtendedIsEmpty = require('./operators/extended/isEmpty');

var _operatorsExtendedIsEmpty2 = _interopRequireDefault(_operatorsExtendedIsEmpty);

var _operatorsEvery = require('./operators/every');

var _operatorsEvery2 = _interopRequireDefault(_operatorsEvery);

var _operatorsLast = require('./operators/last');

var _operatorsLast2 = _interopRequireDefault(_operatorsLast);

var _operatorsMap = require('./operators/map');

var _operatorsMap2 = _interopRequireDefault(_operatorsMap);

var _operatorsMapTo = require('./operators/mapTo');

var _operatorsMapTo2 = _interopRequireDefault(_operatorsMapTo);

var _operatorsMaterialize = require('./operators/materialize');

var _operatorsMaterialize2 = _interopRequireDefault(_operatorsMaterialize);

var _operatorsMerge = require('./operators/merge');

var _operatorsMerge2 = _interopRequireDefault(_operatorsMerge);

var _operatorsMergeAll = require('./operators/mergeAll');

var _operatorsMergeAll2 = _interopRequireDefault(_operatorsMergeAll);

var _operatorsMergeMap = require('./operators/mergeMap');

var _operatorsMergeMap2 = _interopRequireDefault(_operatorsMergeMap);

var _operatorsMergeMapTo = require('./operators/mergeMapTo');

var _operatorsMergeMapTo2 = _interopRequireDefault(_operatorsMergeMapTo);

var _operatorsMulticast = require('./operators/multicast');

var _operatorsMulticast2 = _interopRequireDefault(_operatorsMulticast);

var _operatorsObserveOn = require('./operators/observeOn');

var _operatorsObserveOn2 = _interopRequireDefault(_operatorsObserveOn);

var _operatorsPartition = require('./operators/partition');

var _operatorsPartition2 = _interopRequireDefault(_operatorsPartition);

var _operatorsPublish = require('./operators/publish');

var _operatorsPublish2 = _interopRequireDefault(_operatorsPublish);

var _operatorsPublishBehavior = require('./operators/publishBehavior');

var _operatorsPublishBehavior2 = _interopRequireDefault(_operatorsPublishBehavior);

var _operatorsPublishReplay = require('./operators/publishReplay');

var _operatorsPublishReplay2 = _interopRequireDefault(_operatorsPublishReplay);

var _operatorsReduce = require('./operators/reduce');

var _operatorsReduce2 = _interopRequireDefault(_operatorsReduce);

var _operatorsRepeat = require('./operators/repeat');

var _operatorsRepeat2 = _interopRequireDefault(_operatorsRepeat);

var _operatorsRetry = require('./operators/retry');

var _operatorsRetry2 = _interopRequireDefault(_operatorsRetry);

var _operatorsRetryWhen = require('./operators/retryWhen');

var _operatorsRetryWhen2 = _interopRequireDefault(_operatorsRetryWhen);

var _operatorsSample = require('./operators/sample');

var _operatorsSample2 = _interopRequireDefault(_operatorsSample);

var _operatorsSampleTime = require('./operators/sampleTime');

var _operatorsSampleTime2 = _interopRequireDefault(_operatorsSampleTime);

var _operatorsScan = require('./operators/scan');

var _operatorsScan2 = _interopRequireDefault(_operatorsScan);

var _operatorsShare = require('./operators/share');

var _operatorsShare2 = _interopRequireDefault(_operatorsShare);

var _operatorsShareReplay = require('./operators/shareReplay');

var _operatorsShareReplay2 = _interopRequireDefault(_operatorsShareReplay);

var _operatorsSingle = require('./operators/single');

var _operatorsSingle2 = _interopRequireDefault(_operatorsSingle);

var _operatorsSkip = require('./operators/skip');

var _operatorsSkip2 = _interopRequireDefault(_operatorsSkip);

var _operatorsSkipUntil = require('./operators/skipUntil');

var _operatorsSkipUntil2 = _interopRequireDefault(_operatorsSkipUntil);

var _operatorsStartWith = require('./operators/startWith');

var _operatorsStartWith2 = _interopRequireDefault(_operatorsStartWith);

var _operatorsSubscribeOn = require('./operators/subscribeOn');

var _operatorsSubscribeOn2 = _interopRequireDefault(_operatorsSubscribeOn);

var _operatorsSwitch = require('./operators/switch');

var _operatorsSwitch2 = _interopRequireDefault(_operatorsSwitch);

var _operatorsSwitchMap = require('./operators/switchMap');

var _operatorsSwitchMap2 = _interopRequireDefault(_operatorsSwitchMap);

var _operatorsSwitchMapTo = require('./operators/switchMapTo');

var _operatorsSwitchMapTo2 = _interopRequireDefault(_operatorsSwitchMapTo);

var _operatorsTake = require('./operators/take');

var _operatorsTake2 = _interopRequireDefault(_operatorsTake);

var _operatorsTakeUntil = require('./operators/takeUntil');

var _operatorsTakeUntil2 = _interopRequireDefault(_operatorsTakeUntil);

var _operatorsThrottle = require('./operators/throttle');

var _operatorsThrottle2 = _interopRequireDefault(_operatorsThrottle);

var _operatorsExtendedTimeInterval = require('./operators/extended/timeInterval');

var _operatorsExtendedTimeInterval2 = _interopRequireDefault(_operatorsExtendedTimeInterval);

var _operatorsTimeout = require('./operators/timeout');

var _operatorsTimeout2 = _interopRequireDefault(_operatorsTimeout);

var _operatorsTimeoutWith = require('./operators/timeoutWith');

var _operatorsTimeoutWith2 = _interopRequireDefault(_operatorsTimeoutWith);

var _operatorsToArray = require('./operators/toArray');

var _operatorsToArray2 = _interopRequireDefault(_operatorsToArray);

var _operatorsToPromise = require('./operators/toPromise');

var _operatorsToPromise2 = _interopRequireDefault(_operatorsToPromise);

var _operatorsWindow = require('./operators/window');

var _operatorsWindow2 = _interopRequireDefault(_operatorsWindow);

var _operatorsWindowCount = require('./operators/windowCount');

var _operatorsWindowCount2 = _interopRequireDefault(_operatorsWindowCount);

var _operatorsWindowTime = require('./operators/windowTime');

var _operatorsWindowTime2 = _interopRequireDefault(_operatorsWindowTime);

var _operatorsWindowToggle = require('./operators/windowToggle');

var _operatorsWindowToggle2 = _interopRequireDefault(_operatorsWindowToggle);

var _operatorsWindowWhen = require('./operators/windowWhen');

var _operatorsWindowWhen2 = _interopRequireDefault(_operatorsWindowWhen);

var _operatorsWithLatestFrom = require('./operators/withLatestFrom');

var _operatorsWithLatestFrom2 = _interopRequireDefault(_operatorsWithLatestFrom);

var _operatorsZip = require('./operators/zip');

var _operatorsZip2 = _interopRequireDefault(_operatorsZip);

var _operatorsZipAll = require('./operators/zipAll');

var _operatorsZipAll2 = _interopRequireDefault(_operatorsZipAll);

var _Subject = require('./Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _Subscription = require('./Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _Subscriber = require('./Subscriber');

var _Subscriber2 = _interopRequireDefault(_Subscriber);

var _subjectsReplaySubject = require('./subjects/ReplaySubject');

var _subjectsReplaySubject2 = _interopRequireDefault(_subjectsReplaySubject);

var _subjectsBehaviorSubject = require('./subjects/BehaviorSubject');

var _subjectsBehaviorSubject2 = _interopRequireDefault(_subjectsBehaviorSubject);

var _observablesConnectableObservable = require('./observables/ConnectableObservable');

var _observablesConnectableObservable2 = _interopRequireDefault(_observablesConnectableObservable);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _utilEmptyError = require('./util/EmptyError');

var _utilEmptyError2 = _interopRequireDefault(_utilEmptyError);

var _utilArgumentOutOfRangeError = require('./util/ArgumentOutOfRangeError');

var _utilArgumentOutOfRangeError2 = _interopRequireDefault(_utilArgumentOutOfRangeError);

var _schedulersNextTick = require('./schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

var _schedulersImmediate = require('./schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var _testingTestScheduler = require('./testing/TestScheduler');

var _schedulersVirtualTimeScheduler = require('./schedulers/VirtualTimeScheduler');

var _schedulersVirtualTimeScheduler2 = _interopRequireDefault(_schedulersVirtualTimeScheduler);

_Observable2['default'].combineLatest = _operatorsCombineLatestStatic2['default'];

_Observable2['default'].concat = _operatorsConcatStatic2['default'];

_Observable2['default'].defer = _observablesDeferObservable2['default'].create;

_Observable2['default'].empty = _observablesEmptyObservable2['default'].create;

_Observable2['default'].forkJoin = _observablesForkJoinObservable2['default'].create;

_Observable2['default'].from = _observablesFromObservable2['default'].create;

_Observable2['default'].fromArray = _observablesArrayObservable2['default'].create;

_Observable2['default'].fromEvent = _observablesFromEventObservable2['default'].create;

_Observable2['default'].fromEventPattern = _observablesFromEventPatternObservable2['default'].create;

_Observable2['default'].fromPromise = _observablesPromiseObservable2['default'].create;

_Observable2['default'].interval = _observablesIntervalObservable2['default'].create;

_Observable2['default'].merge = _operatorsMergeStatic2['default'];

_Observable2['default'].never = _observablesInfiniteObservable2['default'].create;
_Observable2['default'].of = _observablesArrayObservable2['default'].of;

_Observable2['default'].range = _observablesRangeObservable2['default'].create;

_Observable2['default']['throw'] = _observablesErrorObservable2['default'].create;

_Observable2['default'].timer = _observablesTimerObservable2['default'].create;

_Observable2['default'].zip = _operatorsZipStatic2['default'];
// Operators
var observableProto = _Observable2['default'].prototype;

observableProto.buffer = _operatorsBuffer2['default'];

observableProto.bufferCount = _operatorsBufferCount2['default'];

observableProto.bufferTime = _operatorsBufferTime2['default'];

observableProto.bufferToggle = _operatorsBufferToggle2['default'];

observableProto.bufferWhen = _operatorsBufferWhen2['default'];

observableProto['catch'] = _operatorsCatch2['default'];

observableProto.combineAll = _operatorsCombineAll2['default'];

observableProto.combineLatest = _operatorsCombineLatest2['default'];

observableProto.concat = _operatorsConcat2['default'];

observableProto.concatAll = _operatorsConcatAll2['default'];

observableProto.concatMap = _operatorsConcatMap2['default'];

observableProto.concatMapTo = _operatorsConcatMapTo2['default'];

observableProto.count = _operatorsCount2['default'];

observableProto.dematerialize = _operatorsDematerialize2['default'];

observableProto.debounce = _operatorsDebounce2['default'];

observableProto.defaultIfEmpty = _operatorsDefaultIfEmpty2['default'];

observableProto.delay = _operatorsDelay2['default'];

observableProto.distinctUntilChanged = _operatorsDistinctUntilChanged2['default'];

observableProto.distinctUntilKeyChanged = _operatorsExtendedDistinctUntilKeyChanged2['default'];

observableProto['do'] = _operatorsDo2['default'];

observableProto.elementAt = _operatorsExtendedElementAt2['default'];

observableProto.expand = _operatorsExpand2['default'];

observableProto.filter = _operatorsFilter2['default'];

observableProto.find = _operatorsExtendedFind2['default'];

observableProto.findIndex = _operatorsExtendedFindIndex2['default'];

observableProto['finally'] = _operatorsFinally2['default'];

observableProto.first = _operatorsFirst2['default'];

observableProto.groupBy = _operatorsGroupBy.groupBy;

observableProto.ignoreElements = _operatorsIgnoreElements2['default'];

observableProto.isEmpty = _operatorsExtendedIsEmpty2['default'];

observableProto.every = _operatorsEvery2['default'];

observableProto.last = _operatorsLast2['default'];

observableProto.map = _operatorsMap2['default'];

observableProto.mapTo = _operatorsMapTo2['default'];

observableProto.materialize = _operatorsMaterialize2['default'];

observableProto.merge = _operatorsMerge2['default'];

observableProto.mergeAll = _operatorsMergeAll2['default'];

observableProto.mergeMap = _operatorsMergeMap2['default'];
observableProto.flatMap = _operatorsMergeMap2['default'];

observableProto.mergeMapTo = _operatorsMergeMapTo2['default'];
observableProto.flatMapTo = _operatorsMergeMapTo2['default'];

observableProto.multicast = _operatorsMulticast2['default'];

observableProto.observeOn = _operatorsObserveOn2['default'];

observableProto.partition = _operatorsPartition2['default'];

observableProto.publish = _operatorsPublish2['default'];

observableProto.publishBehavior = _operatorsPublishBehavior2['default'];

observableProto.publishReplay = _operatorsPublishReplay2['default'];

observableProto.reduce = _operatorsReduce2['default'];

observableProto.repeat = _operatorsRepeat2['default'];

observableProto.retry = _operatorsRetry2['default'];

observableProto.retryWhen = _operatorsRetryWhen2['default'];

observableProto.sample = _operatorsSample2['default'];

observableProto.sampleTime = _operatorsSampleTime2['default'];

observableProto.scan = _operatorsScan2['default'];

observableProto.share = _operatorsShare2['default'];

observableProto.shareReplay = _operatorsShareReplay2['default'];

observableProto.single = _operatorsSingle2['default'];

observableProto.skip = _operatorsSkip2['default'];

observableProto.skipUntil = _operatorsSkipUntil2['default'];

observableProto.startWith = _operatorsStartWith2['default'];

observableProto.subscribeOn = _operatorsSubscribeOn2['default'];

observableProto['switch'] = _operatorsSwitch2['default'];

observableProto.switchMap = _operatorsSwitchMap2['default'];

observableProto.switchMapTo = _operatorsSwitchMapTo2['default'];

observableProto.take = _operatorsTake2['default'];

observableProto.takeUntil = _operatorsTakeUntil2['default'];

observableProto.throttle = _operatorsThrottle2['default'];

observableProto.timeInterval = _operatorsExtendedTimeInterval2['default'];

observableProto.timeout = _operatorsTimeout2['default'];

observableProto.timeoutWith = _operatorsTimeoutWith2['default'];

observableProto.toArray = _operatorsToArray2['default'];

observableProto.toPromise = _operatorsToPromise2['default'];

observableProto.window = _operatorsWindow2['default'];

observableProto.windowCount = _operatorsWindowCount2['default'];

observableProto.windowTime = _operatorsWindowTime2['default'];

observableProto.windowToggle = _operatorsWindowToggle2['default'];

observableProto.windowWhen = _operatorsWindowWhen2['default'];

observableProto.withLatestFrom = _operatorsWithLatestFrom2['default'];

observableProto.zip = _operatorsZip2['default'];

observableProto.zipAll = _operatorsZipAll2['default'];

var Scheduler = {
    nextTick: _schedulersNextTick2['default'],
    immediate: _schedulersImmediate2['default']
};
exports.Subject = _Subject2['default'];
exports.Scheduler = Scheduler;
exports.Observable = _Observable2['default'];
exports.Subscriber = _Subscriber2['default'];
exports.Subscription = _Subscription2['default'];
exports.ReplaySubject = _subjectsReplaySubject2['default'];
exports.BehaviorSubject = _subjectsBehaviorSubject2['default'];
exports.ConnectableObservable = _observablesConnectableObservable2['default'];
exports.Notification = _Notification2['default'];
exports.EmptyError = _utilEmptyError2['default'];
exports.ArgumentOutOfRangeError = _utilArgumentOutOfRangeError2['default'];
exports.TestScheduler = _testingTestScheduler.TestScheduler;
exports.VirtualTimeScheduler = _schedulersVirtualTimeScheduler2['default'];
exports.TimeInterval = _operatorsExtendedTimeInterval.TimeInterval;