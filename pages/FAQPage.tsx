import React, { useState, useEffect, useMemo } from 'react';
import { Page } from '../types';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';

interface FAQPageProps {
  navigateTo: (page: Page) => void;
  toggleTheme: () => void;
}

const faqs = [
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days. Expedited options are available at checkout. International shipping times may vary depending on the destination and customs processing.",
        category: "Shipping & Delivery"
    },
    {
        question: "How can I track my order?",
        answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number on the carrier's website to monitor your package's progress.",
        category: "Orders & Payment"
    },
    {
        question: "How do I care for my new fixtures?",
        answer: "Each product comes with specific care instructions. Generally, we recommend gentle cleaning with a soft cloth and mild soap, avoiding abrasive materials and harsh chemicals to preserve the finish.",
        category: "Products & Care"
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase for a full refund, provided the item is in its original, uninstalled condition. Please visit our Returns page to initiate the process.",
        category: "Returns & Exchanges"
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), as well as PayPal and Apple Pay for a secure and convenient checkout experience.",
        category: "Orders & Payment"
    },
    {
        question: "Do you offer a warranty on your products?",
        answer: "Yes, all MOSSO products come with a limited lifetime warranty covering manufacturing defects. For more details, please see our Warranty information page.",
        category: "Products & Care"
    }
];

const categories = ["All", "Shipping & Delivery", "Orders & Payment", "Products & Care", "Returns & Exchanges"];


const FAQPage: React.FC<FAQPageProps> = ({ navigateTo, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    const breadcrumbItems = [
      { label: 'Home', page: 'home' as Page },
      { label: 'Frequently Asked Questions' },
    ];

    return (
        <>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigateTo={navigateTo}
                toggleTheme={toggleTheme}
                currentPage='faq'
            />
            <div className="flex flex-1 flex-col items-center">
                <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
                    <Navbar
                        navigateTo={navigateTo}
                        toggleTheme={toggleTheme}
                        currentPage="faq"
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                    <main className="flex-grow mx-auto w-full max-w-4xl pb-12 sm:pb-16 md:pb-24">
                        <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />
                        <AnimatedSection>
                            <div className="mb-12 text-center">
                                <h1 className="text-4xl font-black tracking-tight text-text-light dark:text-text-dark sm:text-5xl md:text-6xl font-display">Frequently Asked Questions</h1>
                                <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark">Have a question? Find your answer here.</p>
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection>
                            <div className="mb-10 px-4 py-3">
                                <div className="relative">
                                    <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
                                    <input 
                                        className="h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-secondary-background-light dark:bg-secondary-background-dark pl-12 pr-4 text-base text-text-light dark:text-text-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50" 
                                        placeholder="Search for a question..." 
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="mb-12 flex flex-wrap items-center justify-center gap-3 px-3">
                                {categories.map(category => (
                                    <button key={category} onClick={() => setActiveCategory(category)} className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-secondary-background-light dark:bg-secondary-background-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10'}`}>
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="flex flex-col gap-4 p-4">
                                {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
                                    <details key={index} className="group flex flex-col rounded-lg bg-secondary-background-light dark:bg-secondary-background-dark border border-border-light dark:border-border-dark p-2" open={index === 0}>
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-3">
                                            <p className="text-base font-bold text-text-light dark:text-text-dark">{faq.question}</p>
                                            <span className="material-symbols-outlined text-text-light dark:text-text-dark transition-transform group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="px-3 pb-3 text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </details>
                                )) : (
                                    <p className="text-center text-text-secondary-light dark:text-text-secondary-dark">No questions found. Try a different search or filter.</p>
                                )}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="mt-16 rounded-xl bg-secondary-background-light dark:bg-secondary-background-dark border border-border-light dark:border-border-dark p-8 text-center sm:mt-24">
                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Can't find your answer?</h3>
                                <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">We're here to help. Reach out to our support team for any questions.</p>
                                <button className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105">Contact Us</button>
                            </div>
                        </AnimatedSection>
                    </main>
                </div>
            </div>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default FAQPage;