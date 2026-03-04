import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border-2 border-black dark:border-white px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all shadow-brutal-sm',
  {
    variants: {
      variant: {
        default:
          'bg-[#FFE500] text-black',
        secondary:
          'bg-[#FF6B9D] text-black',
        destructive:
          'bg-[#FF4757] text-black',
        outline: 'bg-white dark:bg-black text-black dark:text-white',
        blue: 'bg-[#00D4FF] text-black',
        green: 'bg-[#00FF94] text-black',
        orange: 'bg-[#FF9500] text-black',
        purple: 'bg-[#B388FF] text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
