import React, { useState } from 'react';
import {
  ScrollView, Image, View, TouchableOpacity, Text, StatusBar,
} from 'react-native';
import styles from './StyleSheet.jsx';
import images from '../images.js';

export default function App() {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImagePress = (index) => {
    setSelectedImageId(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.screenshotsContainer}>
          <ScrollView
            indicatorStyle="white"
            contentContainerStyle={styles.scrollContainer}
            scrollEnabled={true}
            removeClippedSubviews={true}
            pagingEnabled={true}
          >
            {images.map((source, index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                <Image source={source} style={styles.screenshot} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.applyText}>In order to apply your selected style, just click the image.</Text>
        <Text style={styles.applyText}>Current style id: {selectedImageId}</Text>
      </View>
      <StatusBar hidden={false} backgroundColor="black" />
    </View>
  );
}
