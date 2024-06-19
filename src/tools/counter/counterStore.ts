import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 10;
  person = { name: 'test' };
  constructor() {
   
    makeAutoObservable(this, { reset: true }, { autoBind: true });
  }
  increment() {
    this.count += 1;
  }
  reset() {
    this.count = 0;
  }
}

export default CounterStore;
