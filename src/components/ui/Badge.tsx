import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'yellow' | 'outline' | 'white' | 'dark' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full tracking-wide transition-all';
  
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  const variantClasses = {
    primary: 'bg-[#00d082] text-white shadow-sm',
    yellow: 'bg-[#fef84c] text-emerald-950 font-bold shadow-sm',
    soft: 'bg-[#00d082]/15 text-[#008453] border border-[#00d082]/30',
    outline: 'border-2 border-[#00d082] text-[#008453] bg-white',
    white: 'bg-white text-[#008453] shadow-md border border-emerald-100',
    dark: 'bg-[#0b2b1d] text-[#fef84c] border border-emerald-800',
  };

  return (
    <span
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
