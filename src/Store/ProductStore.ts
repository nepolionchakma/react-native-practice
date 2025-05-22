import {types, Instance, SnapshotIn} from 'mobx-state-tree';

// Product model
const Product = types.model('Product', {
  id: types.identifierNumber,
  name: types.string,
  size: types.array(types.string),
  colors: types.array(types.string),
});

export const ProductStore = types
  .model('ProductStore', {
    products: types.array(Product),
  })
  .actions(self => ({
    addProduct(product: SnapshotIn<typeof Product>) {
      self.products.push(product);
    },
  }));

export type IProduct = Instance<typeof Product>;
