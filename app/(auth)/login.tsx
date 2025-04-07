import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { FormInput } from '../../components/ui/form-input';
import { authService } from '../../lib/supabase/services/auth';
import { LoadingSpinner } from '../../components/ui/loading-spinner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

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
        Alert.alert('Error', error.message);
        return;
      }

      if (user) {
        router.replace('/(tabs)/dashboard');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-background">
      <View className="mb-8">
        <Text className="text-3xl font-bold text-foreground mb-2">Welcome Back</Text>
        <Text className="text-lg text-foreground/60">Sign in to your account</Text>
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

      <TouchableOpacity
        className="bg-primary py-4 rounded-lg items-center mt-6"
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner size={24} color="#fff" />
        ) : (
          <Text className="text-white font-semibold text-lg">Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push('/(auth)/register')}
      >
        <Text className="text-center text-foreground">
          Don't have an account? <Text className="text-primary font-semibold">Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
} 