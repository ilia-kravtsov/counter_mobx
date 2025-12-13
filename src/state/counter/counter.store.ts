import { makeAutoObservable } from 'mobx';
import type {CounterState, LastUpdatedBy} from './counter.types';

class CounterStore implements CounterState {
  count = 0;
  step = 1;
  lastUpdatedBy: LastUpdatedBy = null;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += this.step;
    this.lastUpdatedBy = 'increment';
  }

  decrement() {
    this.count -= this.step;
    this.lastUpdatedBy = 'decrement';
  }

  reset() {
    this.count = 0;
    this.lastUpdatedBy = 'reset';
  }

  setStep(step: number) {
    this.step = step;
  }
}

export const counterStore = new CounterStore();
