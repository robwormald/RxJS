import Observable from '../Observable';
import Scheduler from '../Scheduler';
export default function concatProto<R>(...observables: (Observable<any> | Scheduler)[]): Observable<R>;
