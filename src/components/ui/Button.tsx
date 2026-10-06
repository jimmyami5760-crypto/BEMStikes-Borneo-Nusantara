import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'yellow' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none gap-2';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3.5',
  };

  const variantClasses = {
    primary:
      'bg-[#00d082] text-white hover:bg-[#00ba74] shadow-md hover:shadow-lg hover:shadow-[#00d082]/30',
    yellow:
      'bg-[#fef84c] text-emerald-950 font-bold hover:bg-[#f5ee35] shadow-md hover:shadow-[#fef84c]/40',
    outline:
      'border-2 border-[#00d082] text-[#008453] bg-white hover:bg-[#00d082] hover:text-white',
    white:
      'bg-white text-[#008453] hover:bg-emerald-50 shadow-md hover:shadow-lg',
    ghost:
      'text-emerald-900 hover:bg-[#00d082]/15 hover:text-[#008453]',
  };

  const combinedClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
