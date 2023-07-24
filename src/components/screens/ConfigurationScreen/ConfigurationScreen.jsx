// ConfigurationScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { preloadImages, images } from './ImageLoader'; // Import images and preloadImages
import logo from '../../../../assets/exlLogo.png';
import styles from './StyleSheet.jsx';
import SplashScreen from '../SplashScreen/SplashScreen.jsx';

const ConfigurationScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        // Preload the images
        await preloadImages();

        // Artificially delay for two seconds to simulate a slow loading experience.
        // Remove this if you don't want the delay after preloading the images.
        //await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application that images are preloaded, and it can render the ConfigurationScreen.
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const handleImagePress = (index) => {
    setSelectedImageId(index);
  };

  if (!appIsReady) {
    // Show the splash screen while preloading the images
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
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
    </View>
  );
};

export default ConfigurationScreen;
