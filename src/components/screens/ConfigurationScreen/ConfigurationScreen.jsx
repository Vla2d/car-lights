// ConfigurationScreen.jsx
import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import images from '../../../images.js'
import logo from '../../../../assets/exlLogo.png';
import styles from './StyleSheet.jsx';

const ConfigurationScreen = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImagePress = (index) => {
    setSelectedImageId(index);
  };

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
// ShowModeScreen.jsx and SettingsScreen.jsx can be similar to ConfigurationScreen.jsx
