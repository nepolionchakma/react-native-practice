import {types, Instance, SnapshotIn, SnapshotOut} from 'mobx-state-tree';

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
    addProduct2(product: Array<IProductSnapshotType>) {
      const validProducts = product.map(usr => Product.create(usr));
      self.products.replace(validProducts);
    },
  }));

export type IProduct = Instance<typeof Product>;
export type IProductSnapshotType = SnapshotOut<typeof Product>;
