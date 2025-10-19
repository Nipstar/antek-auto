import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'font-black uppercase px-7 py-3 border-3 border-charcoal shadow-brutal-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-xs disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-terracotta text-off-white',
    secondary: 'bg-warm-beige text-charcoal',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
