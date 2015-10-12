import Observer from './Observer';
import Operator from './Operator';
import Scheduler from './Scheduler';
import Subscriber from './Subscriber';
import Subscription from './Subscription';
import { CoreOperators } from './CoreOperators';
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
export default class Observable<T> implements CoreOperators<T> {
    source: Observable<any>;
    operator: Operator<any, T>;
    _isScalar: boolean;
    /**
     * @constructor
     * @param {Function} subscribe the function that is
     * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
     * of a successful completion.
     */
    constructor(subscribe?: <R>(subscriber: Subscriber<R>) => Subscription<T> | Function | void);
    /**
     * @static
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @returns {Observable} a new cold observable
     * @description creates a new cold Observable by calling the Observable constructor
     */
    static create: Function;
    /**
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @returns {Observable} a new observable with the Operator applied
     * @description creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     */
    lift<T, R>(operator: Operator<T, R>): Observable<T>;
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
    subscribe(observerOrNext?: Observer<T> | ((value: T) => void), error?: (error: T) => void, complete?: () => void): Subscription<T>;
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} PromiseCtor? a constructor function used to instantiate the Promise
     * @returns {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    forEach(next: (value: T) => void, PromiseCtor?: PromiseConstructor): Promise<void>;
    _subscribe(subscriber: Subscriber<any>): Subscription<T> | Function | void;
    static combineLatest: <T>(...observables: (Observable<any> | ((...values: Array<any>) => T) | Scheduler)[]) => Observable<T>;
    static concat: <T>(...observables: (Observable<any> | Scheduler)[]) => Observable<T>;
    static defer: <T>(observableFactory: () => Observable<T>) => Observable<T>;
    static empty: <T>(scheduler?: Scheduler) => Observable<T>;
    static forkJoin: <T>(...observables: Observable<any>[]) => Observable<T>;
    static from: <T>(iterable: any, scheduler?: Scheduler) => Observable<T>;
    static fromArray: <T>(array: T[], scheduler?: Scheduler) => Observable<T>;
    static fromEvent: <T>(element: any, eventName: string, selector: (...args: Array<any>) => T) => Observable<T>;
    static fromEventPattern: <T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (...args: Array<any>) => T) => Observable<T>;
    static fromPromise: <T>(promise: Promise<T>, scheduler?: Scheduler) => Observable<T>;
    static interval: (interval: number, scheduler?: Scheduler) => Observable<number>;
    static merge: <T>(...observables: (Observable<any> | Scheduler | number)[]) => Observable<T>;
    static never: <T>() => Observable<T>;
    static of: <T>(...values: (T | Scheduler)[]) => Observable<T>;
    static range: (start: number, end: number, scheduler?: Scheduler) => Observable<number>;
    static throw: <T>(error: T) => Observable<T>;
    static timer: (dueTime: number, period?: number | Scheduler, scheduler?: Scheduler) => Observable<number>;
    static zip: <T>(...observables: (Observable<any> | ((...values: Array<any>) => T))[]) => Observable<T>;
    ignoreElements: () => Observable<T>;
}
