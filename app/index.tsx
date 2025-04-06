import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Welcome to the App</Text>
      <Link href="/(tabs)">Go to Tabs</Link>
    </View>
  );
} 