import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  accentBorder?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  accentBorder = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all duration-300 relative',
        hoverEffect &&
          'hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 hover:border-[#00d082]',
        accentBorder &&
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#00d082] before:via-[#fef84c] before:to-[#00d082]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pt-0 border-t border-slate-100 flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
}
