import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { FormInput } from '../../components/ui/form-input';
import { authService } from '../../lib/supabase/services/auth';
import { LoadingSpinner } from '../../components/ui/loading-spinner';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { user, error } = await authService.signUp({
        name,
        email,
        password,
      });

      if (error) {
        Alert.alert('Error', error.message);
        return;
      }

      if (user) {
        Alert.alert(
          'Success',
          'Registration successful! Please check your email to confirm your account.',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        );
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
        <Text className="text-3xl font-bold text-foreground mb-2">Create Account</Text>
        <Text className="text-lg text-foreground/60">Sign up to get started</Text>
      </View>

      <FormInput
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        autoCapitalize="words"
        error={errors.name}
      />

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
        placeholder="Create a password"
        secureTextEntry
        error={errors.password}
      />

      <FormInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
        error={errors.confirmPassword}
      />

      <TouchableOpacity
        className="bg-primary py-4 rounded-lg items-center mt-6"
        onPress={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner size={24} color="#fff" />
        ) : (
          <Text className="text-white font-semibold text-lg">Sign Up</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push('/(auth)/login')}
      >
        <Text className="text-center text-foreground">
          Already have an account? <Text className="text-primary font-semibold">Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
} 