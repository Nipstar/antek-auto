import React from 'react';

interface IconProps {
  letter: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Icon({ letter, size = 'md' }: IconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-15 h-15 text-2xl',
    lg: 'w-20 h-20 text-4xl',
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-charcoal text-off-white flex items-center justify-center font-black border-3 border-charcoal`}
    >
      {letter.toUpperCase()}
    </div>
  );
}
