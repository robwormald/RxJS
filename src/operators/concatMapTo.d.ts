import Observable from '../Observable';
export default function concatMapTo<T, R, R2>(observable: Observable<R>, projectResult?: (outerValue: T, innerValue: R, outerIndex: number, innerIndex: number) => R2): Observable<R2>;
