import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Menu, Bell, User } from "lucide-react-native"

interface HeaderProps {
  title: string
  onMenuPress?: () => void
  onNotificationPress?: () => void
  onProfilePress?: () => void
}

export function Header({
  title,
  onMenuPress,
  onNotificationPress,
  onProfilePress,
}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
      <View className="flex-row items-center">
        {onMenuPress && (
          <TouchableOpacity onPress={onMenuPress} className="mr-4">
            <Menu size={24} stroke="#000" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-semibold">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-4">
        {onNotificationPress && (
          <TouchableOpacity onPress={onNotificationPress}>
            <Bell size={24} stroke="#000" />
          </TouchableOpacity>
        )}
        {onProfilePress && (
          <TouchableOpacity onPress={onProfilePress}>
            <User size={24} stroke="#000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
} 