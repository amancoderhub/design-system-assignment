import React from 'react';

export interface SidebarItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, collapsed = false }) => (
  <aside className={`h-full bg-[var(--color-background)] text-[var(--color-text)] p-4 ${collapsed ? 'w-16' : 'w-64'}`}>
    <nav>
      {items.map(({ label, path, icon }) => (
        <a
          key={path}
          href={path}
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200"
          aria-label={label}
        >
          {icon}
          {!collapsed && <span>{label}</span>}
        </a>
      ))}
    </nav>
  </aside>
);