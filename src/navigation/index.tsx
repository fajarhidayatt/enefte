import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';
const Home = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const NavigationApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NavigationApp;
