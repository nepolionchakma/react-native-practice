import {types} from 'mobx-state-tree';
import {CounterStore} from './CounterStore';
import {ProductStore} from './ProductStore';
import {StudentStore} from './StudentStore';
import {ProductsStore} from './ProductsStore';

export const RootStore = types.model('RootStore', {
  counterStore: CounterStore,
  productStore: ProductStore,
  studentStore: StudentStore,
  ProductsStore: ProductsStore,
});

export const rootStore = RootStore.create({
  counterStore: {count: 0},
  productStore: {
    products: [],
  },
  studentStore: {
    students: [],
  },
  ProductsStore: {
    products: [],
  },
});

export type IRootStore = typeof RootStore.Type;
