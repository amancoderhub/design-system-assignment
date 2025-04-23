import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: Tooltip

**Description**: A message that appears when a user hovers over an element.

**Props / API**:
- \`content: string\` — Text to show inside tooltip.
- \`children: ReactNode\` — Element to wrap.

**Use Cases**: Providing contextual hints or explanations.

**Anatomy**: A wrapper div and tooltip content.

**States & Variants**: Hover only.

**Accessibility**: Supports screen readers via visually hidden content.

**Theming / Responsiveness**: Theme-ready using CSS variables.

**Do's**:
- ✅ Keep tooltip content short.

**Don'ts**:
- ❌ Don’t rely solely on tooltips for essential info.
`
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded">Hover me</button>,
  },
};
