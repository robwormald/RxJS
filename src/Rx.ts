import Subject from './Subject';
import Scheduler from './Scheduler';
import Observable from './Observable';
import Subscriber from './Subscriber';
import Subscription from './Subscription';
import Notification from './Notification';

import ReplaySubject from './subjects/ReplaySubject';
import BehaviorSubject from './subjects/BehaviorSubject';
import ConnectableObservable from './observables/ConnectableObservable';

import ArrayObservable from './observables/ArrayObservable';
import DeferObservable from './observables/DeferObservable';
import EmptyObservable from './observables/EmptyObservable';
import ErrorObservable from './observables/ErrorObservable';
import InfiniteObservable from './observables/InfiniteObservable';
import IntervalObservable from './observables/IntervalObservable';
import IteratorObservable from './observables/IteratorObservable';
import PromiseObservable from './observables/PromiseObservable';
import RangeObservable from './observables/RangeObservable';
import ScalarObservable from './observables/ScalarObservable';
import TimerObservable from './observables/TimerObservable';
import FromEventPatternObservable from './observables/FromEventPatternObservable';
import FromEventObservable from './observables/FromEventObservable';

Observable.defer = DeferObservable.create;
Observable.from = IteratorObservable.create;
Observable.fromArray = ArrayObservable.create;
Observable.fromPromise = PromiseObservable.create;
Observable.of = ArrayObservable.of;
Observable.range = RangeObservable.create;
Observable.fromEventPattern = FromEventPatternObservable.create;

Observable.just = ScalarObservable.create;
Observable.return = ScalarObservable.create;
Observable.value = ScalarObservable.create;

Observable.throw = ErrorObservable.create;
Observable.empty = EmptyObservable.create;
Observable.never = InfiniteObservable.create;

Observable.timer = TimerObservable.create;
Observable.interval = IntervalObservable.create;
Observable.fromEvent = FromEventObservable.create;

const observableProto = Observable.prototype;

import {concat, concatProto} from './operators/concat';
import concatAll from './operators/concatAll';
import concatMap from './operators/concatMap';
import concatMapTo from './operators/concatMapTo';

Observable.concat = concat;
observableProto.concat = concatProto;
observableProto.concatAll = concatAll;
observableProto.concatMap = concatMap;
observableProto.concatMapTo = concatMapTo;

import {merge, mergeProto} from './operators/merge';
import mergeAll from './operators/mergeAll';
import flatMap from './operators/flatMap';
import flatMapTo from './operators/flatMapTo';
import switchAll from './operators/switchAll';
import switchLatest from './operators/switchLatest';
import switchLatestTo from './operators/switchLatestTo';
import expand from './operators/expand';

Observable.merge = merge;
observableProto.merge = mergeProto;
observableProto.mergeAll = mergeAll;
observableProto.flatMap = flatMap;
observableProto.flatMapTo = flatMapTo;
observableProto.switchAll = switchAll;
observableProto.switchLatest = switchLatest;
observableProto.switchLatestTo = switchLatestTo;
observableProto.expand = expand;

import _do from './operators/do';
import map from './operators/map';
import mapTo from './operators/mapTo';
import toArray from './operators/toArray';
import count from './operators/count';
import scan from './operators/scan';
import reduce from './operators/reduce';
import startWith from './operators/startWith';

observableProto.do = _do;
observableProto.map = map;
observableProto.mapTo = mapTo;
observableProto.toArray = toArray;
observableProto.count = count;
observableProto.scan = scan;
observableProto.reduce = reduce;
observableProto.startWith = startWith;

import take from './operators/take';
import skip from './operators/skip';
import skipUntil from './operators/skipUntil';
import takeUntil from './operators/takeUntil';
import filter from './operators/filter';
import distinctUntilChanged from './operators/distinctUntilChanged';
import distinctUntilKeyChanged from './operators/distinctUntilKeyChanged';

observableProto.take = take;
observableProto.skip = skip;
observableProto.takeUntil = takeUntil;
observableProto.skipUntil = skipUntil;
observableProto.filter = filter;
observableProto.distinctUntilChanged = distinctUntilChanged;
observableProto.distinctUntilKeyChanged = distinctUntilKeyChanged;

import {combineLatest, combineLatestProto} from './operators/combineLatest';
import combineAll from './operators/combineAll';

Observable.combineLatest = combineLatest;
observableProto.combineLatest = combineLatestProto;
observableProto.combineAll = combineAll;

import {zip, zipProto} from './operators/zip';
import zipAll from './operators/zipAll';

Observable.zip = zip;
observableProto.zip = zipProto;
observableProto.zipAll = zipAll;

import publish from './operators/publish';
import multicast from './operators/multicast';

observableProto.publish = publish;
observableProto.multicast = multicast;

import observeOn from './operators/observeOn';
import subscribeOn from './operators/subscribeOn';

observableProto.observeOn = observeOn;
observableProto.subscribeOn = subscribeOn;

import partition from './operators/partition';
import toPromise from './operators/toPromise';
import defaultIfEmpty from './operators/defaultIfEmpty';
import materialize from './operators/materialize';

observableProto.partition = partition;
observableProto.toPromise = toPromise;
observableProto.defaultIfEmpty = defaultIfEmpty;
observableProto.materialize = materialize;

import _catch from './operators/catch';
import retryWhen from './operators/retryWhen';
import repeat from './operators/repeat';

observableProto.catch = _catch;
observableProto.retryWhen = retryWhen;
observableProto.repeat = repeat;

import _finally from './operators/finally';

observableProto.finally = _finally;

import groupBy from './operators/groupBy';

observableProto.groupBy = groupBy;

import delay from './operators/delay';
import throttle from './operators/throttle';
import debounce from './operators/debounce';

observableProto.delay = delay;
observableProto.throttle = throttle;
observableProto.debounce = debounce;

export {

    Subject,
    Scheduler,
    Observable,
    Subscriber,
    Subscription,
    ReplaySubject,
    BehaviorSubject,
    ConnectableObservable,
    Notification 
};
