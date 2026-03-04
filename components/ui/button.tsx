import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-wide ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-3 border-black dark:border-white',
  {
    variants: {
      variant: {
        default: 'bg-[#FFE500] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        destructive:
          'bg-[#FF4757] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        outline:
          'bg-white dark:bg-black shadow-brutal hover:bg-[#FFE500] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        secondary:
          'bg-[#FF6B9D] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        ghost: 'hover:bg-[#FFE500] border-transparent shadow-none hover:border-black hover:shadow-brutal',
        link: 'text-black dark:text-white underline-offset-4 hover:underline border-transparent shadow-none font-bold',
        blue: 'bg-[#00D4FF] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        green: 'bg-[#00FF94] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
        orange: 'bg-[#FF9500] text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-active',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-10 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
