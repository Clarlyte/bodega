import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FloatingActionButtonProps {
  onPress: () => void;
  icon?: string;
  color?: string;
}

export default function FloatingActionButton({
  onPress,
  icon = 'add',
  color = '#007AFF',
}: FloatingActionButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
        <Ionicons name={icon as any} size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
}); 