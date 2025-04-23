import type { Meta, StoryObj } from '@storybook/react';
import { TopSidebar } from './TopSidebar';

const meta: Meta<typeof TopSidebar> = {
  title: 'Navigation/TopSidebar',
  component: TopSidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: TopSidebar

**Description**: Horizontal navigation bar for top-level sections.

**Props / API**:
- \`items: { label: string; path: string; icon?: React.ReactNode }[]\` — Navigation items.
- \`selected?: string\` — Currently selected item.
- \`onSelect?: (path: string) => void\` — Click handler.

**Use Cases**: Top navigation for enterprise or dashboard UIs.

**Anatomy**: Header element containing a list of buttons/links.

**States & Variants**: Default, selected, hover, focus.

**Accessibility**: Uses role="navigation" and ARIA labels.

**Theming / Responsiveness**: Adapts to dark/light theme, collapses on small screens.

**Do's**:
- ✅ Use recognizable icons.
- ✅ Make selected item visually distinct.

**Don'ts**:
- ❌ Overload with too many items.
`
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TopSidebar>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', path: '/', icon: <span>🏠</span> },
      { label: 'Reports', path: '/reports', icon: <span>📊</span> },
      { label: 'Settings', path: '/settings', icon: <span>⚙️</span> },
    ],
    selected: '/',
    onSelect: (path: string) => console.log('Selected:', path),
  },
};
