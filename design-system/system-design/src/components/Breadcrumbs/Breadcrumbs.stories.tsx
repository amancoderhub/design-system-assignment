import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BrowserRouter as Router } from 'react-router-dom';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [(Story) => <Router><Story /></Router>],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Component Name**: Breadcrumbs

**Description**: A navigation aid that shows users their current location within the hierarchy of a website or application.

**Props / API**:
- \`breadcrumbs: { label: string; path: string }[]\` — List of breadcrumb items.

**Use Cases**: Used to indicate and provide navigation through a page hierarchy in apps and dashboards.

**Anatomy / Structure**: \`<nav>\` element with an unordered list of \`<Link>\`s separated by slashes or custom separators.

**States & Variants**: Static, navigable.

**Interaction Behavior**: Each breadcrumb (except the last) is a clickable link.

**Accessibility Notes**:
- Uses \`aria-label="Breadcrumb"\` for navigation landmark.
- Uses semantic \`<nav>\` and \`<ul>\` tags.

**Theming / Responsiveness Support**: Inherits theme colors and typography; layout responsive.

**Do’s and Don’ts / Best Practices**:
- ✅ Keep breadcrumb labels short and meaningful.
- ✅ Use for deep navigation paths.
- ❌ Don’t use breadcrumbs as a primary navigation mechanism.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Product', path: '/' },
      { label: 'Product1', path: '/' },
    ],
  },
};
