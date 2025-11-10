import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

interface Error404PageProps {
  navigateTo: (page: Page) => void;
}

const Error404Page: React.FC<Error404PageProps> = ({ navigateTo }) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center flex-1 w-full bg-background-light dark:bg-background-dark text-center px-4 py-12">
        <div className="text-center pb-3 pt-6">
          <h1 className="text-text-light dark:text-text-dark tracking-tighter text-[120px] sm:text-[160px] md:text-[200px] font-bold leading-none font-display">404</h1>
        </div>
        <div className="flex flex-col items-center gap-3 p-4 max-w-lg text-center">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-text-light dark:text-text-dark tracking-light text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-tight font-display">It seems this page has gone astray.</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              We're sorry, the page you were looking for may have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>
        </div>
        <div className="flex px-4 py-8 justify-center">
          <button onClick={() => navigateTo('home')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Return to Homepage</span>
          </button>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <button onClick={() => navigateTo('collections')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-primary/10 transition-colors">
              <span className="truncate">Shop All</span>
            </button>
            <button onClick={() => navigateTo('home')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-primary/10 transition-colors">
              <span className="truncate">Our Process</span>
            </button>
            <button onClick={() => navigateTo('home')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-primary/10 transition-colors">
              <span className="truncate">Contact</span>
            </button>
          </div>
        </div>
      </main>
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default Error404Page;