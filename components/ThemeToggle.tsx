import React from 'react';

interface ThemeToggleProps {
  onClick: () => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick, className = '' }) => {
  return (
    <button
      aria-label="Toggle theme"
      type="button"
      className={`flex items-center justify-center rounded-full p-2 transition-colors ${className}`}
      onClick={onClick}
    >
      <span className="material-symbols-outlined text-2xl dark:hidden">
        light_mode
      </span>
      <span className="material-symbols-outlined text-2xl hidden dark:inline">
        dark_mode
      </span>
    </button>
  );
};

export default ThemeToggle;