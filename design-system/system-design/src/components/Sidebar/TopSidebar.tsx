import React from 'react';

export interface TopSidebarProps {
  items: { label: string; path: string; icon?: React.ReactNode }[];
  selected?: string;
  onSelect?: (path: string) => void;
}

export const TopSidebar: React.FC<TopSidebarProps> = ({ items, selected, onSelect }) => {
  return (
    <nav role="navigation" className="bg-white dark:bg-gray-900 shadow px-4 py-2 flex items-center space-x-4">
      {items.map((item) => (
        <button
          key={item.path}
          onClick={() => onSelect?.(item.path)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${selected === item.path
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
};
