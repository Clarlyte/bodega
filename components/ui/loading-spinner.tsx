import { View, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export function LoadingSpinner({ size = 40, color = '#000' }: { size?: number; color?: string }) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className="items-center justify-center">
      <Animated.View
        style={{
          width: size,
          height: size,
          borderWidth: 3,
          borderColor: color,
          borderTopColor: 'transparent',
          borderRadius: size / 2,
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
} 