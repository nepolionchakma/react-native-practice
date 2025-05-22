import {types} from 'mobx-state-tree';

export const CounterStore = types
  .model('CounterStore', {
    count: types.number,
  })
  .actions(self => ({
    increment() {
      self.count += 1;
    },
    decrement() {
      self.count -= 1;
    },
    reset() {
      self.count = 0;
    },
  }));

export type ICounterStore = typeof CounterStore.Type;
