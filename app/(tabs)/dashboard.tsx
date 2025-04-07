import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../../lib/context/ThemeContext';
import { SHADOWS } from '../../lib/constants/theme';

export default function Dashboard() {
  const { colors } = useTheme();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <View className="mb-6">
          <Text className="text-2xl font-bold" style={{ color: colors.text }}>
            Welcome Back
          </Text>
          <Text className="text-base" style={{ color: colors.muted }}>
            Here's your storage overview
          </Text>
        </View>

        {/* Quick Stats */}
        <View className="flex-row justify-between mb-6">
          <View
            className="flex-1 p-4 rounded-xl mr-2 bg-white"
            style={SHADOWS.small}
          >
            <Text className="text-sm" style={{ color: colors.muted }}>
              Total Items
            </Text>
            <Text className="text-xl font-bold mt-1" style={{ color: colors.text }}>
              0
            </Text>
          </View>
          <View
            className="flex-1 p-4 rounded-xl ml-2 bg-white"
            style={SHADOWS.small}
          >
            <Text className="text-sm" style={{ color: colors.muted }}>
              Low Stock
            </Text>
            <Text className="text-xl font-bold mt-1" style={{ color: colors.error }}>
              0
            </Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mb-6">
          <Text
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Recent Activity
          </Text>
          <View
            className="p-4 rounded-xl bg-white"
            style={SHADOWS.small}
          >
            <Text style={{ color: colors.muted }}>No recent activity</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View>
          <Text
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Quick Actions
          </Text>
          <View
            className="p-4 rounded-xl bg-white"
            style={SHADOWS.small}
          >
            <Text style={{ color: colors.muted }}>Coming soon...</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 