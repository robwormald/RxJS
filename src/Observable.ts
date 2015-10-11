import Observer from './Observer';
import Operator from './Operator';
import Scheduler from './Scheduler';
import Subscriber from './Subscriber';
import Subscription from './Subscription';
import { root } from './util/root';
import { CoreOperators } from './CoreOperators';
import $$observable from './util/Symbol_observable';

// operators
import combineLatestStatic from './operators/combineLatest-static';
import concatStatic from './operators/concat-static';
import DeferObservable from './observables/DeferObservable';
import EmptyObservable from './observables/EmptyObservable';
import ForkJoinObservable from './observables/ForkJoinObservable';
import FromObservable from './observables/FromObservable';
import ArrayObservable from './observables/ArrayObservable';
import FromEventObservable from './observables/FromEventObservable';
import FromEventPatternObservable from './observables/FromEventPatternObservable';
import PromiseObservable from './observables/PromiseObservable';
import IntervalObservable from './observables/IntervalObservable';
import mergeStatic from './operators/merge-static';
import InfiniteObservable from './observables/InfiniteObservable';
import RangeObservable from './observables/RangeObservable';
import ErrorObservable from './observables/ErrorObservable';
import TimerObservable from './observables/TimerObservable';
import zipStatic from './operators/zip-static';

/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
export default class Observable<T> implements CoreOperators<T>  {
  source: Observable<any>;
  operator: Operator<any, T>;
  _isScalar: boolean = false;

  /**
   * @constructor
   * @param {Function} subscribe the function that is
   * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
   * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
   * of a successful completion.
   */
  constructor(subscribe?: <R>(subscriber: Subscriber<R>) => Subscription<T>|Function|void) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  // HACK: Since TypeScript inherits static properties too, we have to
  // fight against TypeScript here so Subject can have a different static create signature
  /**
   * @method create
   * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
   * @returns {Observable} a new cold observable
   * @description creates a new cold Observable by calling the Observable constructor
   */
  static create: Function = <T>(subscribe?: <R>(subscriber: Subscriber<R>) => Subscription<T>|Function|void) => {
    return new Observable<T>(subscribe);
  };

  /**
   * @method lift
   * @param {Operator} operator the operator defining the operation to take on the observable
   * @returns {Observable} a new observable with the Operator applied
   * @description creates a new Observable, with this Observable as the source, and the passed
   * operator defined as the new observable's operator.
   */
  lift<T, R>(operator: Operator<T, R>): Observable<T> {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }

  /**
   * @method Symbol.observable
   * @returns {Observable} this instance of the observable
   * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
   */
  [$$observable]() {
    return this;
  }

  /**
   * @method subscribe
   * @param {Observer|Function} observerOrNext (optional) either an observer defining all functions to be called,
   *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
   * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
   *  the error will be thrown as unhandled
   * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
   * @returns {Subscription} a subscription reference to the registered handlers
   * @description registers handlers for handling emitted values, error and completions from the observable, and
   *  executes the observable's subscriber function, which will take action to set up the underlying data stream
   */
  subscribe(observerOrNext?: Observer<T> | ((value: T) => void),
            error?: (error: T) => void,
            complete?: () => void): Subscription<T> {

    let subscriber: Subscriber<T>;

    if (observerOrNext && typeof observerOrNext === "object") {
      if(observerOrNext instanceof Subscriber) {
        subscriber = (<Subscriber<T>> observerOrNext);
      } else {
        subscriber = new Subscriber(<Observer<T>> observerOrNext);
      }
    } else {
      const next = <((x?) => void)> observerOrNext;
      subscriber = Subscriber.create(next, error, complete);
    }

    subscriber.add(this._subscribe(subscriber));

    return subscriber;
  }

  /**
   * @method forEach
   * @param {Function} next a handler for each value emitted by the observable
   * @param {PromiseConstructor} PromiseCtor? a constructor function used to instantiate the Promise
   * @returns {Promise} a promise that either resolves on observable completion or
   *  rejects with the handled error
   */
  forEach(next:(value:T) => void, PromiseCtor?: PromiseConstructor): Promise<void> {
    if(!PromiseCtor) {
      if(root.Rx && root.Rx.config && root.Rx.config.Promise) {
        PromiseCtor = root.Rx.config.Promise;
      } else if (root.Promise) {
        PromiseCtor = root.Promise;
      }
    }

    if(!PromiseCtor) {
      throw new Error('no Promise impl found');
    }

    return new PromiseCtor<void>((resolve, reject) => {
      this.subscribe(next, reject, resolve);
    });
  }

  _subscribe(subscriber: Subscriber<any>): Subscription<T> | Function | void {
    return this.source._subscribe(this.operator.call(subscriber));
  }

  // static method stubs
  static combineLatest = combineLatestStatic;
  static concat = concatStatic;
  static defer = DeferObservable.create;
  static empty = EmptyObservable.create;
  static forkJoin = ForkJoinObservable.create;
  static from = FromObservable.create;
  static fromArray = ArrayObservable.create;
  static fromEvent = FromEventObservable.create;
  static fromEventPattern = FromEventPatternObservable.create;
  static fromPromise = PromiseObservable.create;
  static interval = IntervalObservable.create;
  static merge = mergeStatic;
  static never = InfiniteObservable.create;
  static of = ArrayObservable.of;
  static range = RangeObservable.create;
  static throw = ErrorObservable.create;
  static timer = TimerObservable.create;
  static zip = zipStatic;
  ignoreElements: () => Observable<T>;
}