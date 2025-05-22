import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {RootStackParamList} from '../../Types/Types';
// import {StackNavigationProp} from '@react-navigation/stack';
import {useStore} from '../../Store/StoreProvider';
// import HomeImage from '../../assets/img/home-empty.png';
// interface WelcomeProps {
//   navigation: StackNavigationProp<RootStackParamList, 'Notifications'>;
// }
import {observer} from 'mobx-react-lite';

const Home = observer(() => {
  const {counterStore, productStore, studentStore} = useStore();
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'Men T-Shirt',
      size: ['M', 'L'],
      colors: ['black', 'white'],
    };

    productStore.addProduct(newProduct); // ✅ now works
  };
  const handleAddStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: 'Alice Johnson',
      age: 20,
      subjects: ['Math', 'Science', 'English'],
    };

    studentStore.addStudent(newStudent);
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Count : {counterStore.count}</Text>
      <View style={styles.buttonGroup}>
        <Button title="+" onPress={counterStore.increment} />
        <Button title="-" onPress={counterStore.decrement} />
        <Button title="Reset" onPress={counterStore.reset} />
      </View>
      <View style={styles.container}>
        <Button title="Add Product" onPress={handleAddProduct} />

        <FlatList
          data={productStore.products.slice()} // use slice() to convert MST array to plain array
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Sizes: {item.size.join(', ')}</Text>
              <Text>Colors: {item.colors.join(', ')}</Text>
            </View>
          )}
          style={styles.list}
        />
      </View>
      <View style={styles.container}>
        <Button title="Add Student" onPress={handleAddStudent} />

        <FlatList
          data={studentStore.students.slice()}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Age: {item.age}</Text>
              <Text>Subjects: {item.subjects.join(', ')}</Text>
            </View>
          )}
          style={styles.list}
        />
      </View>
    </View>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    marginTop: 40,
    padding: 20,
    // height: 400,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
  box1: {
    flex: 1,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    flex: 2,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    flex: 3,
    height: 100,
    backgroundColor: 'skyblue',
  },
  box4: {
    flex: 4,
    height: 100,
    backgroundColor: 'yellow',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
});
