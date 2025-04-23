import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: Sidebar

**Description**: Vertical navigation list typically used on the left side.

**Props / API**:
- \`items: SidebarItem[]\` — Navigation items.
- \`collapsed?: boolean\` — Toggle width and label visibility.

**Use Cases**: Primary navigation in enterprise dashboards.

**Anatomy**: Aside wrapper with nav links.

**States & Variants**: Expanded, Collapsed.

**Accessibility**: ARIA labels for nav links.

**Theming / Responsiveness**: Uses theme colors, collapses for narrow screens.

**Do's**:
- ✅ Use icons for collapsed view.

**Don'ts**:
- ❌ Avoid nesting too deep without clear structure.
`
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Expanded: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Settings', path: '/settings' },
    ],
    collapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Settings', path: '/settings' },
    ],
    collapsed: true,
  },
};
