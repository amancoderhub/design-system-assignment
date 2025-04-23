import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: Tag

**Description**: A small label used to categorize or highlight items.

**Props / API**:
- \`label: string\` — Text to display inside the tag.
- \`variant?: 'primary' | 'success' | 'error' | 'warning'\` — Determines tag styling.

**Use Cases**: Indicating status, categories, filters.

**Anatomy**: A span element styled with background color and text color.

**States & Variants**: \`primary\`, \`success\`, \`error\`, \`warning\`

**Accessibility**: Semantic span tag, good color contrast.

**Theming / Responsiveness**: Uses CSS variables for theme, responsive by default.

**Do's**:
- ✅ Use to quickly label statuses.
- ✅ Choose meaningful variant color.

**Don'ts**:
- ❌ Don’t use too many tags in tight space.
`
      },
    },
  },
  args: {
    label: 'Tag Example',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Success: Story = { args: { variant: 'success' } };
export const error: Story = { args: { variant: 'error' } };
export const Warning: Story = { args: { variant: 'warning' } };
