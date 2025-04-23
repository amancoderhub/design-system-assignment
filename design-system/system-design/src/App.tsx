import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tag } from './components/Tag/Tag';
import { Tooltip } from './components/Toolstip/Tooltip';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Tabs } from './components/Tabs/Tabs';
import { TopSidebar } from './components/Sidebar/TopSidebar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { lightTheme, darkTheme } from './themes';

const tabs = [
  { label: 'Home', value: 'home' },
  { label: 'Profile', value: 'profile' },
];

const sidebarItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Settings', path: '/settings' },
];

const topNavItems = [
  { label: 'Dashboard', path: '/', icon: <span>🏠</span> },
  { label: 'Reports', path: '/reports', icon: <span>📊</span> },
  { label: 'Settings', path: '/settings', icon: <span>⚙️</span> },
];

const breadcrumbsData = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Product 1', path: '/products/1' },
];

function App() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTopPath, setSelectedTopPath] = useState('/');

  useEffect(() => {
    const theme = isDarkMode ? darkTheme : lightTheme;
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [isDarkMode]);

  return (
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
        <TopSidebar items={topNavItems} selected={selectedTopPath} onSelect={setSelectedTopPath} />
        <div className="flex flex-1">
          <Sidebar items={sidebarItems} />
          <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Design System Components Demo</h1>
              <button
                type="button"
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="px-4 py-2 rounded bg-[var(--color-primary)] text-white"
              >
                Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>

            {/* Include Breadcrumbs Component Here */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Breadcrumbs</h2>
              <Breadcrumbs breadcrumbs={breadcrumbsData} />
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Tabs</h2>
              <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Tag</h2>
              <Tag label="New" variant="primary" />
              <Tag label="Success" variant="success" />
              <Tag label="Error" variant="error" />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Tooltip</h2>
              <Tooltip content="This is a tooltip">
                <button type="button" className="px-4 py-2 bg-[var(--color-primary)] text-white rounded">Hover me</button>
              </Tooltip>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
