import { View, FlatList } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../../lib/context/ThemeContext';
import { SearchBar } from '../../components/ui/search-bar';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import { InventoryItem } from '@/components/inventory/InventoryItem';

const mockInventory = [
  { id: '1', name: 'Product A', quantity: 10, price: 29.99 },
  { id: '2', name: 'Product B', quantity: 5, price: 49.99 },
  { id: '3', name: 'Product C', quantity: 20, price: 9.99 },
];

export default function InventoryScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInventory = mockInventory.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-background">
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search inventory..."
      />
      <FlatList
        data={filteredInventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InventoryItem
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
      <FloatingActionButton
        onPress={() => {
          // Handle add new item
        }}
        icon="plus"
      />
    </View>
  );
} 