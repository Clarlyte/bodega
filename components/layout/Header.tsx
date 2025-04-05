import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showProfile?: boolean;
  showSettings?: boolean;
  onProfilePress?: () => void;
  onSettingsPress?: () => void;
}

export default function Header({
  title,
  showProfile = true,
  showSettings = true,
  onProfilePress,
  onSettingsPress,
}: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconsContainer}>
          {showProfile && (
            <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
              <Ionicons name="person-circle" size={24} color="#007AFF" />
            </TouchableOpacity>
          )}
          {showSettings && (
            <TouchableOpacity onPress={onSettingsPress} style={styles.iconButton}>
              <Ionicons name="settings" size={24} color="#007AFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
}); 