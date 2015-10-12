import Observable from '../Observable';
import Scheduler from '../Scheduler';
export default function combineLatest<R>(...observables: (Observable<any> | ((...values: Array<any>) => R) | Scheduler)[]): Observable<R>;
