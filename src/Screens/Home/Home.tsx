import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from '../../Types/Types';
import {StackNavigationProp} from '@react-navigation/stack';
// import HomeImage from '../../assets/img/home-empty.png';
interface WelcomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Notifications'>;
}
const Home = ({navigation}: WelcomeProps) => {
  const HomeFilled = require('../../Assets/HomeFilled.png');
  const Facility = require('../../Assets/Facility.png');
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue, 'searchValue');

  return (
    <>
      <Text>Home</Text>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // height: 400,
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
});
