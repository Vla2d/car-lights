// SplashScreen.jsx
import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../../../assets/exlLogo.png')} style={{ width: 100, height: 100 }} />
      <ActivityIndicator style={{ marginTop: 20 }} size="large" color="black" />
    </View>
  );
};

export default SplashScreen;
