import * as React from "react"
import { View, ActivityIndicator } from "react-native"
import { cn } from "../../lib/utils"

interface LoadingProps {
  className?: string
  size?: "small" | "large"
  color?: string
}

export function Loading({ className, size = "large", color = "#000000" }: LoadingProps) {
  return (
    <View className={cn("flex-1 items-center justify-center", className)}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
} 