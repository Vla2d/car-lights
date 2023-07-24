import React, { useEffect, useState } from 'react';
import { deactivateKeepAwake } from 'expo-keep-awake'
import { View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './Footer/Footer.jsx';
import ConfigurationScreen from './screens/ConfigurationScreen/ConfigurationScreen.jsx';
import ShowModeScreen from './screens/ShowModeScreen/ShowModeScreen.jsx';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    deactivateKeepAwake();
  }) // по идее работает только в dev environment, но нужно проверить в продакшн

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ConfigurationScreen"
        screenOptions={{
          headerShown: false, // Hide the header
        }}
      >
        <Stack.Screen name="ConfigurationScreen" component={ConfigurationScreen} />
        <Stack.Screen name="ShowModeScreen" component={ShowModeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
