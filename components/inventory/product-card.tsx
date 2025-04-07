import * as React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { cn } from "../../lib/tailwind/utils"

interface ProductCardProps {
  name: string
  price: number
  stock: number
  imageUrl?: string
  onPress?: () => void
  className?: string
}

export function ProductCard({
  name,
  price,
  stock,
  imageUrl,
  onPress,
  className,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-4 shadow-sm",
        className
      )}
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="mb-2 h-32 w-full rounded-md"
          resizeMode="cover"
        />
      )}
      <Text className="text-lg font-semibold">{name}</Text>
      <Text className="mt-1 text-sm text-gray-500">${price.toFixed(2)}</Text>
      <View className="mt-2 flex-row items-center">
        <View
          className={cn(
            "h-2 w-2 rounded-full",
            stock > 10 ? "bg-green-500" : stock > 0 ? "bg-yellow-500" : "bg-red-500"
          )}
        />
        <Text className="ml-2 text-sm text-gray-600">
          {stock} in stock
        </Text>
      </View>
    </TouchableOpacity>
  )
} 