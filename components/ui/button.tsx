import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-primary text-primary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "border border-input bg-background",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  className?: string
  children: React.ReactNode
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          "flex-row items-center justify-center rounded-md",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        <Text className="text-base font-medium text-white">{children}</Text>
      </TouchableOpacity>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants, buttonSizes } 