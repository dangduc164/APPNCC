// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
// import Detail from '../views/Detail';

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Detail" component={Detail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;