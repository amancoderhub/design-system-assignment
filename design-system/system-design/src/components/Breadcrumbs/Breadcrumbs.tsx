// src/components/Breadcrumbs/Breadcrumbs.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path}>
            <Link to={breadcrumb.path} className="text-blue-600">
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
