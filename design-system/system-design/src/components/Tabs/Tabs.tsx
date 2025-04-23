import React from 'react';

export interface Tab {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: Tab[];
  selected: string;
  onSelect: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, selected, onSelect }) => (
  <div className="flex border-b border-[var(--color-primary)]">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-200 ${
          selected === tab.value
            ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
            : 'border-transparent hover:text-[var(--color-primary)]'
        }`}
        onClick={() => onSelect(tab.value)}
        role="tab"
        aria-selected={selected === tab.value}
      >
        {tab.label}
      </button>
    ))}
  </div>
);