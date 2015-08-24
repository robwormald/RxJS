import Operator from '../Operator';
import Observer from '../Observer';
import Subscriber from '../Subscriber';
import Observable from '../Observable';
import Subject from '../Subject';
import Map from '../util/Map';
import FastMap from '../util/FastMap';

import tryCatch from '../util/tryCatch';
import {errorObject} from '../util/errorObject';
import bindCallback from '../util/bindCallback';

export default function groupBy<T, R>(keySelector: (value: T) => string,
    elementSelector?: (value: T) => R,
    durationSelector?: (grouped: GroupSubject<R>) => Observable<any>): Observable<GroupSubject<R>>
{
  return this.lift(new GroupByOperator<T, R>(keySelector, durationSelector, elementSelector));
}

export class GroupByOperator<T, R> extends Operator<T, R> {
  constructor(private keySelector: (value: T) => string, 
    private durationSelector?: (grouped: GroupSubject<R>) => Observable<any>,
    private elementSelector?: (value: T) => R) {
    super();
  }
  
  call(observer: Observer<R>): Observer<T> {
    return new GroupBySubscriber<T, R>(observer, this.keySelector, this.durationSelector, this.elementSelector);
  }
}

export class GroupBySubscriber<T, R> extends Subscriber<T> {
  private groups = null;
  
  constructor(destination: Observer<R>, private keySelector: (value: T) => string,
    private durationSelector?: (grouped: GroupSubject<R>) => Observable<any>, 
    private elementSelector?: (value: T) => R) {
    super(destination);
  }

  _next(x: T) {
    let key = tryCatch(this.keySelector)(x);
    if(key === errorObject) {
      this.error(key.e);
    } else {
      let groups = this.groups;
      const elementSelector = this.elementSelector;
      const durationSelector = this.durationSelector;
      
      if (!groups) {
        groups = this.groups = typeof key === 'string' ? new FastMap() : new Map();
      }
      
      let group: GroupSubject<R> = groups.get(key);
    
      if (!group) {
        groups.set(key, group = new GroupSubject(key));
        
        if (durationSelector) {
          let duration = tryCatch(durationSelector)(group);
          if (duration === errorObject) {
            this.error(duration.e);
          } else {
            this.add(duration.subscribe(new GroupDurationSubscriber(group, this)));
          }
        }
        
        this.destination.next(group);
      }
      
      if (elementSelector) {
        let value = tryCatch(elementSelector)(x)
        if(value === errorObject) {
          group.error(value.e);
        } else {
          group.next(value);
        }
      } else {
        group.next(x);
      }
    }
  }
  
  _error(err: any) {
    const groups = this.groups;
    if (groups) {
      groups.forEach((group, key) => {
        group.error(err);
        this.removeGroup(key);
      });
    }
    this.destination.error(err);
  }
  
  _complete() {
    const groups = this.groups;
    if(groups) {
      groups.forEach((group, key) => {
        group.complete();
        this.removeGroup(group);
      });
    }
    this.destination.complete();
  }
  
  removeGroup(key: string) {
    this.groups[key] = null;  
  }  
}

export class GroupSubject<T> extends Subject<T> {
  constructor(public key: string) {
    super();
  } 
}

export class GroupDurationSubscriber<T> extends Subscriber<T> {
  constructor(private group: GroupSubject<T>, private parent:GroupBySubscriber<any, T>) {
    super(null);
  }
  
  _next(value: T) {
    const group = this.group;
    group.complete();
    this.parent.removeGroup(group.key);
  }
  
  _error(err: any) {
    const group = this.group;  
    group.error(err);
    this.parent.removeGroup(group.key);
  }
  
  _complete() {
    const group = this.group;
    group.complete();
    this.parent.removeGroup(group.key);
  }
}