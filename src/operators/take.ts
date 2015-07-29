import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';

export default function take(total) {
  return this.lift(new TakeOperator(total));
}

export class TakeOperator<T, R> extends Operator<T, R> {

  total: number;

  constructor(total: number) {
    super();
    this.total = total;
  }

  call(observer: Observer<R>): Observer<T> {
    return new TakeSubscriber<T>(observer, this.total);
  }
}

export class TakeSubscriber<T> extends Subscriber<T> {

  total: number;
  count: number = 0;

  constructor(destination: Observer<T>, total: number) {
    super(destination);
    this.total = total;
  }

  _next(x) {
    if (++this.count <= this.total) {
      this.destination.next(x);
    } else {
      this.destination.complete();
    }
  }
}
