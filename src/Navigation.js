import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './Details';
import HomeScreen from './Home';
import NasaTest from './NasaTest';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="." component={NasaTest} />
        <Stack.Screen name="List" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
