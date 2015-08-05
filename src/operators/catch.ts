import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';
import Observable from '../Observable';

import tryCatch from '../util/tryCatch';
import {errorObject} from '../util/errorObject';

export default function _catch<T>(selector: (err:any, caught:Observable<any>) => Observable<any>) {
  var catchOperator = new CatchOperator(selector);
  var caught = this.lift(catchOperator);
  catchOperator.caught = caught;
  return caught;
}

export class CatchOperator<T, R> extends Operator<T, R> {
  selector: (err:any, caught:Observable<any>) => Observable<any>;
  caught: Observable<any>;
  source: Observable<T>;
  
  constructor(selector: (err:any, caught:Observable<any>) => Observable<any>) {
    super();
    this.selector = selector;
  }

  call(observer: Observer<T>): Observer<T> {
    return new CatchSubscriber(observer, this.selector, this.caught);
  }
}

export class CatchSubscriber<T> extends Subscriber<T> {
  selector: (err:any, caught:Observable<any>) => Observable<any>;
  caught: Observable<any>;
  
  constructor(destination: Observer<T>, selector: (err:any, caught:Observable<any>) => Observable<any>, caught: Observable<any>) {
    super(destination);
    this.selector = selector;
    this.caught = caught;
  }

  _error(err) {
    const result = tryCatch(this.selector)(err, this.caught);
    if (result === errorObject) {
      this.destination.error(errorObject.e);
    } else {
      this.add(result.subscribe(this.destination));
    }
  }
}
