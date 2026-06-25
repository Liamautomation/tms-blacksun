import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-deep shadow-sm",
        outline: "border border-border text-ink hover:bg-brand-soft hover:border-brand",
        secondary: "bg-card-tint text-ink hover:bg-brand-mist border border-line",
        ghost: "text-ink-soft hover:text-ink hover:bg-brand-mist",
        destructive: "bg-alert/10 text-alert hover:bg-alert/20 border border-alert/20",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 px-3 text-xs rounded-md",
        lg: "h-11 px-6 text-base rounded-xl",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
