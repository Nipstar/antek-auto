import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover
    ? 'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200'
    : '';

  return (
    <div
      className={`bg-white border-3 border-charcoal shadow-brutal rounded-none p-10 md:p-12 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
