import Observable from '../Observable';
export default function count<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Observable<T>;
