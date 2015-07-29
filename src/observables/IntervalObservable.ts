import isNumeric from '../util/isNumeric';
import Scheduler from '../Scheduler';
import Observable from '../Observable';

export default class IntervalObservable<T> extends Observable<T> {

  static create(period: number = 0, scheduler: Scheduler = Scheduler.nextTick) {
    return new IntervalObservable(period, scheduler);
  }

  static dispatch(state) {

    const { index, subscriber } = state;

    subscriber.next(index);

    if (subscriber.isUnsubscribed) {
      return;
    }

    state.index = index + 1;

    (<any> this).schedule(state);
  }

  constructor(private period: number = 0, private scheduler: Scheduler = Scheduler.nextTick) {
    super();
    if (!isNumeric(period) || period < 0) {
      this.period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== "function") {
      this.scheduler = Scheduler.nextTick;
    }
  }

  _subscribe(subscriber) {

    const index = 0;
    const period = this.period;
    const scheduler = this.scheduler;

    subscriber.add(scheduler.schedule(period, {
      index, subscriber
    }, IntervalObservable.dispatch));
  }
}
