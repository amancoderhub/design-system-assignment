import React from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => (
  <div className="relative group inline-block">
    {children}
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[var(--color-text)] text-[var(--color-background)] text-xs px-2 py-1 rounded z-10">
      {content}
    </div>
  </div>
);