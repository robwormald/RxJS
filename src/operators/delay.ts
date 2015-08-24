import Operator from '../Operator';
import Observer from '../Observer';
import Scheduler from '../Scheduler';
import Subscriber from '../Subscriber';
import Notification from '../Notification';

export default function delay<T>(delay: number, scheduler: Scheduler = Scheduler.immediate) {
  return this.lift(new DelayOperator(delay, scheduler));
}

export class DelayOperator<T, R> extends Operator<T, R> {

  delay: number;
  scheduler: Scheduler;

  constructor(delay: number, scheduler: Scheduler) {
    super();
    this.delay = delay;
    this.scheduler = scheduler;
  }

  call(observer: Observer<T>): Observer<T> {
    return new DelaySubscriber(observer, this.delay, this.scheduler);
  }
}

export class DelaySubscriber<T> extends Subscriber<T> {

  protected delay: number;
  protected queue: Array<any>=[];
  protected scheduler: Scheduler;
  protected active: boolean = false;
  protected errored: boolean = false;

  static dispatch(state) {
    const source = state.source;
    const queue = source.queue;
    const scheduler = state.scheduler;
    const destination = state.destination;
    while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
      queue.shift().notification.observe(destination);
    }
    if (queue.length > 0) {
      (<any> this).delay = Math.max(0, queue[0].time - scheduler.now());
      (<any> this).schedule(state);
    } else {
      source.active = false;
    }
  }

  constructor(destination: Observer<T>, delay: number, scheduler: Scheduler) {
    super(destination);
    this.delay = delay;
    this.scheduler = scheduler;
  }

  _next(x) {
    if (this.errored) {
      return;
    }
    const scheduler = this.scheduler;
    this.queue.push(new DelayMessage<T>(scheduler.now() + this.delay, Notification.createNext(x)));
    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _error(e) {
    const scheduler = this.scheduler;
    this.errored = true;
    this.queue = [new DelayMessage<T>(scheduler.now() + this.delay, Notification.createError(e))];
    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _complete() {
    if (this.errored) {
      return;
    }
    const scheduler = this.scheduler;
    this.queue.push(new DelayMessage<T>(scheduler.now() + this.delay, Notification.createComplete()));
    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _schedule(scheduler) {
    this.active = true;
    this.add(scheduler.schedule(this.delay, {
      source: this, destination: this.destination, scheduler: scheduler
    }, DelaySubscriber.dispatch));
  }
}

class DelayMessage<T> {
  time: number;
  notification: any;
  constructor(time: number, notification: any) {
    this.time = time;
    this.notification = notification;
  }
}