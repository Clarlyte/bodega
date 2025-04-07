import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { FormInput } from '../../components/ui/form-input';
import { CustomButton } from '../../components/ui/custom-button';
import { authService } from '../../lib/supabase/services/auth';
import { useTheme } from '../../lib/context/ThemeContext';
import { COLORS } from '../../lib/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { colors } = useTheme();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { user, error } = await authService.login({ email, password });
      
      if (error) {
        setErrors({ password: error.message });
        return;
      }

      if (user) {
        router.replace('/(tabs)/dashboard');
      }
    } catch (error) {
      setErrors({ password: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-background"
    >
      <LinearGradient
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        className="h-72 items-center justify-center rounded-b-3xl"
      >
        <Image
          source={require('../../assets/logo.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
        <Text className="text-white text-3xl font-bold mt-4">Bodega</Text>
        <Text className="text-white/80 text-lg">Storage Management</Text>
      </LinearGradient>

      <View className="px-6 pt-8">
        <View className="mb-8">
          <Text className="text-2xl font-bold" style={{ color: colors.text }}>Welcome Back</Text>
          <Text className="text-base mt-1" style={{ color: colors.muted }}>Sign in to your account</Text>
        </View>

        <FormInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />

        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          error={errors.password}
        />

        <CustomButton
          title="Sign In"
          onPress={handleLogin}
          isLoading={isLoading}
          size="large"
          style={{ marginTop: 24 }}
        />

        <CustomButton
          title="Create Account"
          onPress={() => router.push('/(auth)/register')}
          variant="outline"
          size="large"
          style={{ marginTop: 12 }}
        />
      </View>
    </ScrollView>
  );
} 