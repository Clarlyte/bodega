import { useEffect, useState } from 'react';
import { View, Image, Animated } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../lib/context/ThemeContext';

export default function Home() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));
  const { theme } = useTheme();

  useEffect(() => {
    // Fade in and scale animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to tabs after animation
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Image
          source={require('../assets/logo.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
} 