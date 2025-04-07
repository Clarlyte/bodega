import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../lib/context/ThemeContext';

interface InventoryItemProps {
  name: string;
  quantity: number;
  price: number;
}

export function InventoryItem({ name, quantity, price }: InventoryItemProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      className="bg-card p-4 rounded-lg mb-3 shadow-sm"
      onPress={() => {
        // Handle item press
      }}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-foreground">{name}</Text>
          <Text className="text-sm text-muted-foreground">
            Quantity: {quantity}
          </Text>
        </View>
        <Text className="text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
} 