import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../lib/context/ThemeContext';

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function FormInput({ label, error, ...props }: FormInputProps) {
  const { colors } = useTheme();

  return (
    <View className="mb-4">
      <Text className="text-sm font-medium text-foreground mb-1">{label}</Text>
      <TextInput
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? 'border-red-500' : 'border-border'
        } bg-background text-foreground`}
        placeholderTextColor={colors.text}
        {...props}
      />
      {error && (
        <Text className="text-sm text-red-500 mt-1">{error}</Text>
      )}
    </View>
  );
} 