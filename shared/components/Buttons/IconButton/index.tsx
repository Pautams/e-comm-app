import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  badge?: number | string;
}

export function IconButton({
  variant = 'default',
  size = 'md',
  className,
  children,
  badge,
  ...props
}: IconButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative cursor-pointer';

  const variantClasses = {
    default: 'text-foreground hover:bg-muted focus:ring-primary',
    ghost: 'text-foreground hover:bg-muted focus:ring-primary',
    outline: 'border border-border text-foreground hover:bg-muted focus:ring-primary',
  };

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-md',
    md: 'w-10 h-10 rounded-lg',
    lg: 'w-12 h-12 rounded-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full px-1">
          {badge}
        </span>
      )}
    </button>
  );
}