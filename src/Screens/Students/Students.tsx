import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../../Store/StoreProvider';
import {FlatList} from 'react-native-gesture-handler';

const Students = () => {
  const {studentStore} = useStore();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState(0);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddStudent = () => {
    const newStudent = {
      id: Number(Date.now()),
      name,
      age: Number(age),
      subjects,
    };
    studentStore.addStudent(newStudent);

    setName('');
    setAge(0);
    setSubjects([]);
    setModalVisible(false);
  };
  console.log(studentStore.students.slice(), 'studentStore');
  return (
    <View style={{padding: 20}}>
      <Button title="Add Student" onPress={() => setModalVisible(true)} />

      <FlatList
        data={studentStore.students.slice()}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <Text>
            {item.name} - {item.age} - {item.subjects.join(', ')}
          </Text>
        )}
      />

      {/* Modal Form */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Student</Text>

            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Age"
              style={styles.input}
              keyboardType="numeric"
              value={age.toString()}
              onChangeText={text => setAge(Number(text))}
            />
            <TextInput
              placeholder="e.g. Math, History, Physics"
              style={styles.input}
              value={subjects.join(', ')}
              onChangeText={text =>
                setSubjects(
                  text
                    .split(',')
                    .map(s => s.trim())
                    .filter(Boolean),
                )
              }
            />

            <View style={styles.buttonRow}>
              <Pressable style={styles.button} onPress={handleAddStudent}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
              <Pressable
                style={[styles.button, {backgroundColor: '#999'}]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Students;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  },
});
