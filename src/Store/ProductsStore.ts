import axios from 'axios';
import {flow, Instance, types} from 'mobx-state-tree';

export const ProductsModel = types.model('Product', {
  id: types.identifierNumber,
  title: types.string,
  price: types.number,
  description: types.string,
  category: types.string,
  image: types.string,
  rating: types.model('Rating', {
    rate: types.number,
    count: types.number,
  }),
});
export const ProductsStore = types
  .model('ProductStore', {
    products: types.array(ProductsModel),
  })
  .actions(self => ({
    fetchProducts: flow(function* () {
      try {
        const response = yield axios.get('https://fakestoreapi.com/products');
        console.log(response.data, 'response');
        self.products.replace(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    }),
  }));
export type IProductsStore = Instance<typeof ProductsStore>;
