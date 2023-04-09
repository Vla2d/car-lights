// App.jsx

import React, { useState } from 'react';
import {
  ScrollView, Image, StyleSheet, View, TouchableOpacity, Text, StatusBar,
} from 'react-native';

import images from './images.js';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (index) => {
    setSelectedImage(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.screenshotsContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer} scrollEnabled={true} removeClippedSubviews={true}>
            {images.map((source, index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                <Image
                  source={source}
                  style={styles.screenshot}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.applyText}>In order to apply your selected style, just click the image.</Text>
      </View>
      <StatusBar hidden={false} backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  applyText: {
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center', // Added to center the text horizontally
  },
  screenshot: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
  screenshotsContainer: {
    width: 300,
    flexGrow: 0,
    maxHeight: 250,
    marginTop: 50,
    overflow: 'scroll',
    flexDirection: 'column',
    alignItems: 'center', // Added to center child elements horizontally
  },
});
