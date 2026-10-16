import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-1 text-xs text-[#6B5749]">
      <ol className="flex items-center flex-wrap gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
        {/* Home */}
        <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center gap-1 text-[#881337] hover:text-[#B45309] font-medium transition-colors cursor-pointer"
            aria-label="Navigate to Explore Rajasthan Homepage"
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5 text-[#B45309]" />
            <span itemProp="name">Home</span>
          </button>
          <meta itemProp="position" content="1" />
          <ChevronRight className="w-3 h-3 text-[#A89887] mx-1 shrink-0" aria-hidden="true" />
        </li>

        {items.map((item, idx) => {
          const position = idx + 2;
          const isLast = idx === items.length - 1 || item.isCurrent;

          return (
            <li
              key={idx}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span
                  className="font-semibold text-[#291A14] truncate max-w-[220px] sm:max-w-md"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <button
                    onClick={() => item.href && onNavigate && onNavigate(item.href)}
                    className="text-[#881337] hover:text-[#B45309] font-medium transition-colors cursor-pointer truncate max-w-[150px] sm:max-w-xs"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </button>
                  <ChevronRight className="w-3 h-3 text-[#A89887] mx-1 shrink-0" aria-hidden="true" />
                </>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
