import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';
import Observable from '../Observable';
import Subject from '../Subject';
import Subscription from '../Subscription';

import tryCatch from '../util/tryCatch';
import {errorObject} from '../util/errorObject';

export default function retryWhen<T>(notifier: (errors:Observable<any>) => Observable<any>) {
  return this.lift(new RetryWhenOperator(notifier, this));
}

export class RetryWhenOperator<T, R> extends Operator<T, R> {
  constructor(protected notifier: (errors: Observable<any>) => Observable<any>, protected original:Observable<T>) {
    super();
  }

  call(observer: Observer<T>): Observer<T> {
    return new RetryWhenSubscriber<T>(observer, this.notifier, this.original);
  }
}

export class RetryWhenSubscriber<T> extends Subscriber<T> {
  errors: Subject<any>;
  retryNotifications: Observable<any>;
  retryNotificationSubscription: Subscription<any>;
  
  constructor(destination: Observer<T>, public notifier: (errors: Observable<any>) => Observable<any>, public original: Observable<T>) {
    super(destination);
  }
  
  _error(err: any) {
    if (!this.retryNotifications) {
      this.errors = new Subject();
      const notifications = tryCatch(this.notifier).call(this, this.errors);
      if (notifications === errorObject) {
        this.destination.error(errorObject.e);
      } else {
        this.retryNotifications = notifications;
        this.retryNotificationSubscription = notifications.subscribe(new RetryNotificationSubscriber(this));
        this.add(this.retryNotificationSubscription);
      }
    }
    this.errors.next(err);
  }
  
  finalError(err: any) {
    this.destination.error(err);
  }
  
  resubscribe() {
    this.original.subscribe(this);
  }
}

export class RetryNotificationSubscriber<T> extends Subscriber<T> {
  constructor(public parent: RetryWhenSubscriber<any>) {
    super(null);  
  }
  
  _next(value: T) {
    this.parent.resubscribe();
  }
  
  _error(err: any) {
    this.parent.finalError(err);
  }
  
  _complete() {
    this.parent.complete();
  }
}