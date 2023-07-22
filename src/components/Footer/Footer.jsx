import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('ConfigurationScreen')}
      >
        <FontAwesome name="cog" size={24} color="black" />
        <Text style={styles.buttonText}>Configuration</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('ShowModeScreen')}
      >
        <FontAwesome name="eye" size={24} color="black" />
        <Text style={styles.buttonText}>Show Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('SettingsScreen')}
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
    position: 'absolute', // Make the footer position absolute
    bottom: 0, // Align the footer to the bottom of the screen
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
};

export default Footer;
