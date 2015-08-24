import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';
import Observable from '../Observable';
import Subject from '../Subject';
import Subscription from '../Subscription';

import tryCatch from '../util/tryCatch';
import {errorObject} from '../util/errorObject';

export default function repeat<T>(count: number): Observable<T> {
  return this.lift(new RepeatOperator(count, this));
}

export class RepeatOperator<T, R> extends Operator<T, R> {
  constructor(protected count: number, protected original:Observable<T>) {
    super();
  }

  call(observer: Observer<T>): Observer<T> {
    return new RepeatSubscriber<T>(observer, this.count, this.original);
  }
}

export class RepeatSubscriber<T> extends Subscriber<T> {
  private repeated: number = 0;
  constructor(destination: Observer<T>, public count: number, public original: Observable<T>) {
    super(destination);
  }
  
  _complete(){
    if (this.count === (this.repeated+=1)){
      this.destination.complete();
    }else{
      this.resubscribe();  
    }             
  }

  resubscribe() {    
    this.original.subscribe(this);
  }
}
