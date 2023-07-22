// Footer.jsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install this package

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Configuration')}
      >
        <FontAwesome name="cog" size={24} color="black" />
        <Text style={styles.buttonText}>Configuration</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('ShowMode')}
      >
        <FontAwesome name="eye" size={24} color="black" />
        <Text style={styles.buttonText}>Show Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Settings')}
      >
        <FontAwesome name="gear" size={24} color="black" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 60,
  },
  footerButton: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
};

export default Footer;
