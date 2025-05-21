import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from './src/Types/Types';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/Screens/Welcome/Welcome';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './src/Screens/Home/HomeNavigator';

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
