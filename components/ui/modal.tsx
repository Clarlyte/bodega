import * as React from "react"
import { View, Text, TouchableOpacity, Modal as RNModal } from "react-native"
import { cn } from "../../lib/tailwind/utils"
import { X } from "lucide-react-native"

interface ModalProps {
  isVisible: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isVisible, onClose, title, children, className }: ModalProps) {
  return (
    <RNModal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className={cn("w-[90%] rounded-lg bg-white p-4", className)}>
          <View className="flex-row items-center justify-between">
            {title && <Text className="text-lg font-semibold">{title}</Text>}
            <TouchableOpacity onPress={onClose}>
              <X size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <View className="mt-4">{children}</View>
        </View>
      </View>
    </RNModal>
  )
} 