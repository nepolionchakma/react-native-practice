import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Notifications = () => {
  const data = [
    {id: '1', title: 'Apple'},
    {id: '2', title: 'Banana'},
    {id: '3', title: 'Cherry'},
    {id: '4', title: 'Date'},
    {id: '5', title: 'Eggplant'},
    {id: '6', title: 'Fig'},
    {id: '7', title: 'Grape'},
    {id: '8', title: 'Honeydew'},
    {id: '9', title: 'Iceberg'},
    {id: '10', title: 'Jackfruit'},
    {id: '11', title: 'Kiwi'},
    {id: '12', title: 'Lemon'},
    {id: '13', title: 'Mango'},
    {id: '14', title: 'Nectarine'},
    {id: '15', title: 'Orange'},
    {id: '16', title: 'Papaya'},
    {id: '17', title: 'Quince'},
    {id: '18', title: 'Raspberry'},
    {id: '19', title: 'Strawberry'},
    {id: '20', title: 'Tangerine'},
    {id: '21', title: 'Ugli fruit'},
    {id: '22', title: 'Watermelon'},
    {id: '23', title: 'Xigua'},
    {id: '24', title: 'Yuzu'},
  ];
  console.log(data, 'data');
  const sections = [
    {title: 'Fruits', data: ['Apple', 'Banana']},
    {title: 'Vegetables', data: ['Carrot', 'Spinach']},
  ];
  const [IsOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      {/* <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Text style={styles.in}>{item.title}</Text>}
      style={styles.container}
      horizontal
    /> */}
      {/* <ActivityIndicator size="large" color="blue" /> */}
      <TouchableOpacity onPress={() => setIsOpenModal(true)}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Open Modal</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => console.log('Pressed')}
        style={({pressed}) => [{backgroundColor: pressed ? 'red' : 'blue'}]}>
        <Text style={{color: 'white'}}>Press</Text>
      </Pressable>

      <View>
        <Modal
          animationType="slide"
          visible={IsOpenModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setIsOpenModal(!IsOpenModal);
          }}>
          <View style={{height: 110, width: 220, backgroundColor: 'red'}}>
            <Button
              title="Close"
              onPress={() => setIsOpenModal(!IsOpenModal)}
            />
            <Pressable onPress={() => setIsOpenModal(!IsOpenModal)}>
              <Text>Hide Modal</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => setIsOpenModal(!IsOpenModal)}
              style={styles.in}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
            <Text>This is a modal</Text>
          </View>
        </Modal>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text>{item}1</Text>}
        // renderSectionHeader={({section}) => (
        //   <Text style={{fontWeight: 'bold', fontSize: 18}}>{section.title}</Text>
        // )}
        renderSectionFooter={({section}) => (
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {section.title}000
          </Text>
        )}
      />
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#fff',
    // gap: 20,
  },
  in: {
    backgroundColor: 'green',
    paddingVertical: 10,
    gap: 10,
    paddingHorizontal: 20,
  },
});
