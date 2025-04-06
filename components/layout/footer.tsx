import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Home, Package, BarChart, Settings } from "lucide-react-native"

interface FooterProps {
  activeTab: "home" | "inventory" | "analytics" | "settings"
  onTabPress: (tab: string) => void
}

export function Footer({ activeTab, onTabPress }: FooterProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "inventory", icon: Package, label: "Inventory" },
    { id: "analytics", icon: BarChart, label: "Analytics" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  return (
    <View className="border-t border-gray-200 bg-white">
      <View className="flex-row justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => onTabPress(tab.id)}
              className="items-center"
            >
              <Icon
                size={24}
                color={isActive ? "#3b82f6" : "#6b7280"}
              />
              <Text
                className={`mt-1 text-xs ${
                  isActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
} 