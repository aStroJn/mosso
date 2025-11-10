import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-text-light text-background-light dark:bg-black dark:text-text-secondary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h2 className="text-white text-xl font-bold tracking-[-0.015em] font-display">MOSSO</h2>
            <p className="mt-2 text-sm text-background-light/70 dark:text-text-secondary-dark/60 max-w-xs">
              Engineered elegance for the modern bathroom. Quality, innovation, and timeless design since 2005.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">About Us</a></li>
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Careers</a></li>
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Contact</a></li>
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Warranty</a></li>
              <li><a onClick={() => navigateTo('faq')} className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Facebook</a></li>
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Instagram</a></li>
              <li><a className="text-background-light/70 dark:text-text-secondary-dark/60 hover:text-white dark:hover:text-text-dark cursor-pointer">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 dark:border-text-dark/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background-light/50 dark:text-text-secondary-dark/50">
          <p>© 2024 MOSSO Sanitary Ware. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a className="hover:text-white dark:hover:text-text-dark cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white dark:hover:text-text-dark cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;