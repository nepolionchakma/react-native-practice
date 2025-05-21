import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Home';
import Notifications from '../Notifications/Notifications';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();
  const HomeEmpty = require('../../Assets/HomeEmpty.png');
  const HomeFilled = require('../../Assets/HomeFilled.png');
  const SettingsEmpty = require('../../Assets/SettingsEmpty.png');
  const SettingsFilled = require('../../Assets/SettingsFilled.png');
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          animation: 'fade',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <Image
                source={focused ? HomeFilled : HomeEmpty}
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  // tintColor: focused ? 'blue' : 'black',
                }}
              />
            ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <Image
                source={focused ? SettingsFilled : SettingsEmpty}
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  // tintColor: focused ? 'blue' : 'black',
                }}
              />
            ),
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
