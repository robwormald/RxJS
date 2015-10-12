import Observable from '../Observable';
import VirtualTimeScheduler from '../schedulers/VirtualTimeScheduler';
import Subject from '../Subject';
import ColdObservable from './ColdObservable';
import TestMessage from './TestMessage';
import SubscriptionLog from './SubscriptionLog';
export declare type observableToBeFn = (marbles: string, values?: any, errorValue?: any) => void;
export declare type subscriptionLogsToBeFn = (marbles: string | string[]) => void;
export declare class TestScheduler extends VirtualTimeScheduler {
    assertDeepEqual: (actual: any, expected: any) => boolean | void;
    private hotObservables;
    private flushTests;
    constructor(assertDeepEqual: (actual: any, expected: any) => boolean | void);
    createColdObservable(marbles: string, values?: any, error?: any): ColdObservable<{}>;
    createHotObservable<T>(marbles: string, values?: any, error?: any): Subject<T>;
    private materializeInnerObservable(observable, outerFrame);
    expectObservable(observable: Observable<any>, unsubscriptionMarbles?: string): ({
        toBe: observableToBeFn;
    });
    expectSubscriptions(actualSubscriptionLogs: SubscriptionLog[]): ({
        toBe: subscriptionLogsToBeFn;
    });
    flush(): void;
    static getUnsubscriptionFrame(marbles?: string): number;
    static parseMarblesAsSubscriptions(marbles: string): SubscriptionLog;
    static parseMarbles(marbles: string, values?: any, errorValue?: any, materializeInnerObservables?: boolean): TestMessage[];
}
