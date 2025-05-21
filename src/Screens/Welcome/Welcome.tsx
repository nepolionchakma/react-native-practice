import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Types/Types';
import {StackNavigationProp} from '@react-navigation/stack';

interface WelcomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Welcome = ({navigation}: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
