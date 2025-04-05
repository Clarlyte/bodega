import { useState, useCallback } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export function useCamera() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const requestCameraPermission = useCallback(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }, []);

  const scanBarcode = useCallback(async () => {
    try {
      setIsScanning(true);
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        throw new Error('Camera permission not granted');
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Here you would typically process the image for barcode scanning
        // For now, we'll just return the image URI
        return result.assets[0].uri;
      }
    } catch (error) {
      console.error('Error scanning barcode:', error);
      throw error;
    } finally {
      setIsScanning(false);
    }
  }, []);

  return {
    hasPermission,
    isScanning,
    requestCameraPermission,
    scanBarcode,
  };
} 