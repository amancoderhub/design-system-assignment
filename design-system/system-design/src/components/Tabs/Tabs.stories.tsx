import type { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: Tabs

**Description**: Horizontal set of selectable tabs.

**Props / API**:
- \`tabs: Tab[]\` — Array of tabs.
- \`selected: string\` — Currently selected tab.
- \`onSelect: (value: string) => void\` — Tab change handler.

**Use Cases**: Section switching (e.g., profile/settings).

**Anatomy**: Tab list rendered as buttons.

**States & Variants**: Selected, hover.

**Accessibility**: ARIA roles for tablist, tab, selected.

**Theming / Responsiveness**: CSS variable theme support.

**Do's**:
- ✅ Keep tab labels short.
- ✅ Handle keyboard navigation.

**Don'ts**:
- ❌ Use for deep navigation.
`
      },
    },
  },
};

export default meta;

export const Default = () => {
  const [selected, setSelected] = useState('tab1');
  return (
    <Tabs
      tabs={[
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
      ]}
      selected={selected}
      onSelect={setSelected}
    />
  );
};
