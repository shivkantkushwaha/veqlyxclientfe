'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veqlyx-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-red-black text-white shadow-lg hover:shadow-red-glow hover:scale-105",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg",
        outline:
          "border-2 border-veqlyx-red text-veqlyx-red hover:bg-veqlyx-red hover:text-white",
        secondary:
          "bg-veqlyx-gray-800 text-white hover:bg-veqlyx-gray-700",
        ghost: "text-veqlyx-red hover:bg-veqlyx-red/10 hover:text-veqlyx-red",
        link: "text-veqlyx-red underline-offset-4 hover:underline",
        gradient: 
          "bg-gradient-red-black text-white shadow-lg hover:shadow-red-glow hover:scale-105 border-0",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        xl: "h-16 rounded-lg px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }