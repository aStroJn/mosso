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
        question: "Do I need a professional plumber for installation?",
        answer: "For MOSSO products, we strictly recommend installation by a certified professional plumber. Our fixtures utilize high-precision brass internal components that require exact torque specifications and specific valve alignments to ensure the lifetime warranty remains valid.",
        category: "Installation"
    },
    {
        question: "What is the standard rough-in depth for wall-mount faucets?",
        answer: "Our wall-mount units typically require a rough-in depth of 2.5\" to 3.25\" from the finished wall surface. Please refer to the specific Technical Data Sheet (TDS) provided with your collection for precise millimetric requirements.",
        category: "Installation"
    },
    {
        question: "How do I prevent water spots on Gold-PVD finishes?",
        answer: "While PVD (Physical Vapor Deposition) is extremely durable, mineral deposits can still form. We recommend a soft wipe-down with a dry cloth after each use. For stubborn spots, a 50/50 solution of white vinegar and water is acceptable, followed by immediate rinsing and drying.",
        category: "Care & Maintenance"
    },
    {
        question: "How do I nurture the natural oxidation of unlacquered brass?",
        answer: "Our Living Finishes are designed to evolve. We recommend allowing the natural patina process to occur. For regular upkeep, use only pH-neutral soaps and microfiber cloths to preserve the hand-polished luster without stripping away the evolving character of the metal.",
        category: "Care & Maintenance"
    },
    {
        question: "What is covered under the MOSSO Lifetime Guarantee?",
        answer: "Precision is our promise. All MOSSO fixtures are backed by a limited lifetime warranty on mechanical performance and a 5-year warranty on specialty artisanal finishes.",
        category: "Warranty"
    },
    {
        question: "How do I register my product for warranty?",
        answer: "To register your product, please have your proof of purchase ready and contact our technical concierge team or submit a ticket through our support portal.",
        category: "Warranty"
    }
];

const categories = ["All", "Installation", "Care & Maintenance", "Warranty", "Technical Support"];


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
                    <main className="flex-grow w-full pb-12 sm:pb-16 md:pb-24">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
                            <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />
                        </div>

                        {/* Hero Header */}
                        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                            <AnimatedSection>
                                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                    <div className="max-w-2xl">
                                        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-6 block font-bold">Concierge & Assistance</span>
                                        <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8 text-text-light dark:text-text-dark">How Can We Help?</h1>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-lg leading-relaxed">
                                            Find technical specifications, installation guides, and maintenance protocols for your MOSSO fixtures. Our commitment to precision extends beyond the product to your ownership experience.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
                                        <img
                                            alt="Architectural detail"
                                            className="object-cover w-full h-full opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk6J8hqciJDW5Q_G0STnZfKERZP6yWwaTzVmyEiRlIEQEaXK6jKYsTSuhKpl1tlHjxnK36LN2Xs1Y6lMrob3prbrflQ_oQJzDTZlTLsLI69EzTfFPlbwQKKveZrKvaOxWILezro1b30JS2UJDEllJeNeHqPNF667vLy6230zQezwbhNwh7ga6XI9lijoLgdW8pFE4NxaexUXIcMiIK10vMHfER4N0glBynitC1lwT57PI6PWNy-9OZB9amuvEatA3pnpTIgr_TNEEf"
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>
                        </section>

                        {/* Search Bar Overlay */}
                        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 md:-mt-12 relative z-10">
                            <AnimatedSection>
                                <div className="bg-secondary-background-light dark:bg-secondary-background-dark p-6 md:p-8 flex items-center gap-6 rounded-xl border border-border-light dark:border-border-dark shadow-xl">
                                    <span className="material-symbols-outlined text-primary text-3xl">search</span>
                                    <input
                                        className="bg-transparent border-none focus:ring-0 text-xl font-light w-full placeholder:text-text-secondary-light/40 dark:text-text-dark"
                                        placeholder="Search for installation guides, parts, or warranty details..."
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}

                                    />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* FAQ Categories Bento */}
                        <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* Category Sidebar */}
                            <div className="md:col-span-3 space-y-8">
                                <div className="sticky top-40">
                                    <h3 className="font-display text-2xl mb-8 font-bold text-text-light dark:text-text-dark">Categories</h3>
                                    <ul className="space-y-6 font-display text-sm tracking-widest uppercase">
                                        {categories.map(category => (
                                            <li key={category}>
                                                <button
                                                    onClick={() => setActiveCategory(category)}
                                                    className={`flex items-center gap-4 group transition-colors ${activeCategory === category ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'}`}
                                                >
                                                    <span className={`h-[1px] bg-primary transition-all ${activeCategory === category ? 'w-8' : 'w-0 group-hover:w-8'}`}></span>
                                                    {category}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ Content */}
                            <div className="md:col-span-9 space-y-24">
                                {categories.filter(c => c !== 'All').map((category, catIndex) => {
                                    const categoryFaqs = filteredFaqs.filter(f => f.category === category);
                                    if (activeCategory !== 'All' && activeCategory !== category) return null;
                                    if (categoryFaqs.length === 0) return null;

                                    return (
                                        <AnimatedSection key={category}>
                                            <div className="space-y-12" id={category.toLowerCase().replace(/\s+/g, '-')}>
                                                <div className="flex items-center gap-6">
                                                    <span className="text-4xl font-display italic text-primary/20">{String(catIndex + 1).padStart(2, '0')}</span>
                                                    <h2 className="text-3xl font-display tracking-wide uppercase font-bold text-text-light dark:text-text-dark">{category}</h2>
                                                </div>

                                                {category === "Care & Maintenance" && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                        <div className="bg-secondary-background-light dark:bg-secondary-background-dark p-8 md:p-12 space-y-4 rounded-xl border border-border-light dark:border-border-dark">
                                                            <span className="material-symbols-outlined text-primary text-4xl">clean_hands</span>
                                                            <h4 className="font-display text-xl font-bold text-text-light dark:text-text-dark">The Patina Process</h4>
                                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">Our Living Finishes are designed to evolve. Learn how to nurture the natural oxidation of unlacquered brass.</p>
                                                        </div>
                                                        <div className="bg-secondary-background-light dark:bg-secondary-background-dark p-8 md:p-12 space-y-4 rounded-xl border border-border-light dark:border-border-dark">
                                                            <span className="material-symbols-outlined text-primary text-4xl">warning</span>
                                                            <h4 className="font-display text-xl font-bold text-text-light dark:text-text-dark">Cleaning Protocol</h4>
                                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">Avoid abrasive chemicals. Use only pH-neutral soaps and microfiber cloths to preserve the hand-polished luster.</p>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="space-y-1 border-t border-border-light dark:border-border-dark mt-8">
                                                    {categoryFaqs.map((faq, index) => (
                                                        <details key={index} className="group py-8 border-b border-border-light/50 dark:border-border-dark/50">
                                                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                                                <span className="text-xl font-display font-medium text-text-light dark:text-text-dark group-open:text-primary transition-colors pr-6">
                                                                    {faq.question}
                                                                </span>
                                                                <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform">add</span>
                                                            </summary>
                                                            <div className="mt-6 text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-3xl">
                                                                {faq.answer}
                                                            </div>
                                                        </details>
                                                    ))}
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    );
                                })}

                                {filteredFaqs.length === 0 && (
                                    <div className="text-center py-20">
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">No questions found matching your search.</p>
                                        <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-4 text-primary font-bold hover:underline">Clear all filters</button>
                                    </div>
                                )}

                                {/* Warranty Section */}
                                {(activeCategory === 'All' || activeCategory === 'Warranty') && (
                                    <AnimatedSection>
                                        <div className="bg-secondary-background-light dark:bg-secondary-background-dark p-10 md:p-16 border-l-4 border-primary rounded-r-xl shadow-lg mt-12" id="warranty">
                                            <h2 className="text-3xl font-display tracking-wide uppercase mb-8 font-bold text-text-light dark:text-text-dark">Our Lifetime Guarantee</h2>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed mb-12 max-w-2xl">
                                                Precision is our promise. All MOSSO fixtures are backed by a limited lifetime warranty on mechanical performance and a 5-year warranty on specialty artisanal finishes.
                                            </p>
                                            <button
                                                onClick={() => window.open('https://wa.me/918076889423?text=Hello%2C%20I%20would%20like%20to%20register%20my%20MOSSO%20product%20for%20warranty.', '_blank')}
                                                className="bg-primary px-10 py-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white hover:brightness-110 transition-all rounded-lg shadow-lg hover:scale-105"
                                            >
                                                Register Your Product
                                            </button>
                                        </div>
                                    </AnimatedSection>
                                )}
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="bg-secondary-background-light dark:bg-secondary-background-dark py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-border-light dark:border-border-dark mb-12">
                            <AnimatedSection>
                                <div className="max-w-4xl mx-auto text-center relative z-10">
                                    <h2 className="font-display text-4xl md:text-5xl mb-6 font-bold text-text-light dark:text-text-dark">Still have questions?</h2>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-12 max-w-xl mx-auto">Our technical concierge team is available for deep-dive consultations regarding custom installations or large-scale architectural projects.</p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => window.open('https://wa.me/918076889423?text=Hello%2C%20I%20want%20to%20submit%20a%20support%20ticket%20for%20MOSSO.', '_blank')}
                                            className="bg-primary text-white px-12 py-5 font-display text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all rounded-lg shadow-lg hover:scale-105"
                                        >
                                            submit your ticket
                                        </button>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 dark:opacity-5 grayscale pointer-events-none">
                                <img
                                    alt="Interior detail"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqGEmvh_dHMWIQ3uhnQnxN-5TpdqjFTuBgCmffbjPxsvBiCfQkJ0cRPRi2vUyGHMphQb7oqAh1VNEwvI4WqnHjOif5po895b9OpYtDsfBLvvD8ziosxbZfM5R9mzqtbMACkjM_UcFOnAh7ojDLyAItxYJn_TyT0hJRHwfysJubW1OIM7vlSfDf7VcxfMqVu0LtOPYIpvXQW6GJoL8oTX4G2TrdHOJlzU1pvrOndQkSlEKgK2DvcGfLXl7tXk1qKS3HUR9hTEuCi6OA"
                                />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default FAQPage;