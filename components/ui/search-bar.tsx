import * as React from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import { cn } from "../../lib/utils"
import { Search } from "lucide-react-native"

interface SearchBarProps {
  className?: string
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  onSearch?: () => void
}

export function SearchBar({
  className,
  placeholder = "Search...",
  value,
  onChangeText,
  onSearch,
}: SearchBarProps) {
  return (
    <View className={cn("flex-row items-center rounded-md border border-input bg-background px-3", className)}>
      <Search size={16} stroke="#6b7280" />
      <TextInput
        className="flex-1 py-2 text-base"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#6b7280"
      />
      {onSearch && (
        <TouchableOpacity onPress={onSearch} className="ml-2">
          <Search size={16} stroke="#3b82f6" />
        </TouchableOpacity>
      )}
    </View>
  )
} 