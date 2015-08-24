import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';
import Observable from '../Observable';
import Scheduler from '../Scheduler';
import Subscription from '../Subscription';

import tryCatch from '../util/tryCatch';
import {errorObject} from '../util/errorObject';
import bindCallback from '../util/bindCallback';

export default function throttle<T>(delay: number, scheduler: Scheduler = Scheduler.nextTick) {
  return this.lift(new ThrottleOperator(delay, scheduler));
}

export class ThrottleOperator<T, R> extends Operator<T, R> {
  constructor(private delay:number, private scheduler:Scheduler) {
    super();
  }
  
  call(observer: Observer<R>): Observer<T> {
    return new ThrottleSubscriber(observer, this.delay, this.scheduler);
  }
}

export class ThrottleSubscriber<T, R> extends Subscriber<T> {
  private throttled: Subscription<any>;
  
  constructor(destination:Observer<T>, private delay:number, private scheduler:Scheduler) {
    super(destination);
  }

  _next(x) {
    this.clearThrottle();
    this.add(this.throttled = this.scheduler.schedule(this.delay, { value: x, subscriber: this }, dispatchNext));
  }
  
  throttledNext(x) {
    this.clearThrottle();  
    this.destination.next(x);
  }
  
  clearThrottle() {
    const throttled = this.throttled;
    if (throttled) {
      this.remove(throttled);
      throttled.unsubscribe();
      this.throttled = null;  
    }
  }
}

function dispatchNext({ value, subscriber }) {
  subscriber.throttledNext(value);
}
