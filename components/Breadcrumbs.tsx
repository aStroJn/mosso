import React from 'react';
import { Page } from '../types';

interface BreadcrumbItem {
  label: string;
  page?: Page;
  params?: { productId?: number };
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigateTo: (page: Page, params?: { productId?: number }) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, navigateTo }) => {
  return (
    <div className="py-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal">/</span>
              )}
              {item.page && index < items.length - 1 ? (
                <a
                  className="text-primary text-sm font-medium leading-normal cursor-pointer hover:underline"
                  onClick={() => navigateTo(item.page!, item.params)}
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
