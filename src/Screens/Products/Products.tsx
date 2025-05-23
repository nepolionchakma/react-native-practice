import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../Store/StoreProvider';

const Products = observer(() => {
  const {ProductsStore} = useStore();

  useEffect(() => {
    ProductsStore.fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ProductsStore.products.slice()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable onPress={() => console.log(item)} style={styles.item}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
});

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    borderColor: '#000000',
    borderWidth: 1,
  },
});
