import { useEffect, useState } from 'react';
import { View, Image, Animated, Text } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../lib/context/ThemeContext';
import { LoadingSpinner } from '../components/ui/loading-spinner';
import { authService } from '../lib/supabase/services/auth';

export default function Home() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));
  const [loadingText, setLoadingText] = useState('Loading...');
  const { colors } = useTheme();

  useEffect(() => {
    const initializeApp = async () => {
      try {
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

        // Check authentication status
        setLoadingText('Checking authentication...');
        const user = await authService.checkAuthStatus();

        // Simulate loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Navigate based on auth status
        if (user) {
          router.replace('/(tabs)/dashboard');
        } else {
          router.replace('/(auth)/login');
        }
      } catch (error) {
        console.error('Error during initialization:', error);
        setLoadingText('Error loading app. Please try again.');
      }
    };

    initializeApp();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
        className="items-center"
      >
        <Image
          source={require('../assets/logo.png')}
          className="w-32 h-32 mb-4"
          resizeMode="contain"
        />
        <LoadingSpinner size={40} color={colors.primary} />
        <Text className="mt-4 text-lg text-foreground">{loadingText}</Text>
      </Animated.View>
    </View>
  );
} 