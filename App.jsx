import React from 'react';
import {
  ScrollView, Image, StyleSheet, View, TouchableOpacity, Text, StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.screenshotsContainer}>
        <Image
          source={require('./screenshots/cropped-image_149.png')}
          style={styles.screenshot}
        />
      </View>

      <StatusBar hidden={false} backgroundColor="black" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start', // set to top
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  screenshot: {
    flex: 1,
    resizeMode: 'contain',
  },
  screenshotsContainer: {
    width: 300,
    height: 100,
    marginTop: 200, // adjust as needed
  },
});
