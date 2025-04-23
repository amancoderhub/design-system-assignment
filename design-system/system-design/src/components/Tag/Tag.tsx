import React from 'react';

export interface TagProps {
  label: string;
  variant?: 'primary' | 'success' | 'error' | 'warning';
}

export const Tag: React.FC<TagProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-3 py-1 rounded-full text-sm font-medium';
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-white',
    success: 'bg-[var(--color-success)] text-white',
    error: 'bg-[var(--color-error)] text-white',
    warning: 'bg-[var(--color-warning)] text-black',
  };

  return <span className={`${baseStyle} ${variantStyles[variant]}`}>{label}</span>;
};