import * as React from "react"
import { View, Text } from "react-native"
import { cn } from "../../lib/utils"
import { AlertTriangle } from "lucide-react-native"

interface StockAlertProps {
  currentStock: number
  threshold: number
  className?: string
}

export function StockAlert({ currentStock, threshold, className }: StockAlertProps) {
  if (currentStock > threshold) return null

  const isCritical = currentStock === 0
  const isWarning = currentStock <= threshold / 2

  return (
    <View
      className={cn(
        "flex-row items-center rounded-md p-3",
        isCritical
          ? "bg-red-50"
          : isWarning
          ? "bg-yellow-50"
          : "bg-blue-50",
        className
      )}
    >
      <AlertTriangle
        size={20}
        color={isCritical ? "#ef4444" : isWarning ? "#eab308" : "#3b82f6"}
      />
      <Text
        className={cn(
          "ml-2 text-sm font-medium",
          isCritical
            ? "text-red-700"
            : isWarning
            ? "text-yellow-700"
            : "text-blue-700"
        )}
      >
        {isCritical
          ? "Out of stock"
          : isWarning
          ? `Low stock: ${currentStock} remaining`
          : `Stock running low: ${currentStock} remaining`}
      </Text>
    </View>
  )
} 