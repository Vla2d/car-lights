// ImageLoader.js
import { Asset } from 'expo-asset';

// Import all the images
import image0 from '../../../../lights_images/image0.png';
import image1 from '../../../../lights_images/image1.png';
// ... (import all other images)

const images = [
  image0,
  image1,
  // ... (add all other images to the array)
];

// Preload all the images
const preloadImages = async () => {
  const imageAssets = images.map(image => Asset.fromModule(image).downloadAsync());
  await Promise.all(imageAssets);
};

export { images, preloadImages };
