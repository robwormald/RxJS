import Observable from '../Observable';
import Scheduler from '../Scheduler';
export default function concat<R>(...observables: (Observable<any> | Scheduler)[]): Observable<R>;
