import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../lib/context/ThemeContext';
import { DollarSign, TrendingUp, Clock, Plus, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SalesScreen = () => {
  const { colors } = useTheme();

  const recentTransactions = [
    { id: 1, item: 'Grocery Items', amount: 156.00, time: '2:30 PM', status: 'completed' },
    { id: 2, item: 'Fresh Produce', amount: 89.50, time: '1:45 PM', status: 'completed' },
    { id: 3, item: 'Beverages', amount: 45.75, time: '12:20 PM', status: 'completed' },
    { id: 4, item: 'Snacks', amount: 23.99, time: '11:15 AM', status: 'completed' },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <LinearGradient
        colors={[colors.primary, colors.primary + '80']}
        className="px-4 pt-12 pb-6"
      >
        <Text className="text-2xl font-bold text-white mb-4">Sales</Text>
        <View className="bg-white/20 rounded-xl p-4">
          <Text className="text-white text-sm mb-2">Today's Sales</Text>
          <Text className="text-white text-3xl font-bold">$315.24</Text>
          <View className="flex-row items-center mt-2">
            <TrendingUp size={16} color="white" />
            <Text className="text-white text-sm ml-1">12% up from yesterday</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Quick Stats */}
      <View className="flex-row mx-4 -mt-6">
        <View className="flex-1 bg-white rounded-xl p-4 mr-2 shadow-sm">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-600">Orders</Text>
            <View className="bg-blue-100 rounded-full p-2">
              <Clock size={16} color={colors.primary} />
            </View>
          </View>
          <Text className="text-xl font-bold mt-2">24</Text>
          <Text className="text-sm text-gray-500">Today</Text>
        </View>
        <View className="flex-1 bg-white rounded-xl p-4 ml-2 shadow-sm">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-600">Revenue</Text>
            <View className="bg-green-100 rounded-full p-2">
              <DollarSign size={16} color="#34D399" />
            </View>
          </View>
          <Text className="text-xl font-bold mt-2">$315.24</Text>
          <Text className="text-sm text-gray-500">Today</Text>
        </View>
      </View>

      {/* Recent Transactions */}
      <View className="flex-1 mx-4 mt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Recent Transactions</Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-sm text-gray-500 mr-1">See All</Text>
            <ChevronRight size={16} color={colors.muted} />
          </TouchableOpacity>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {recentTransactions.map((transaction) => (
            <TouchableOpacity
              key={transaction.id}
              className="bg-white rounded-xl p-4 mb-3 shadow-sm"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="font-medium text-base">{transaction.item}</Text>
                  <Text className="text-gray-500 text-sm mt-1">{transaction.time}</Text>
                </View>
                <Text className="text-lg font-semibold">${transaction.amount.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Add Sale Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6"
        onPress={() => {
          // Handle new sale
        }}
      >
        <LinearGradient
          colors={[colors.primary, colors.primary + '80']}
          className="w-14 h-14 rounded-full items-center justify-center shadow-lg"
        >
          <Plus size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SalesScreen; 