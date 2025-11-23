import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import BlogEditor from './pages/BlogEditor';

import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-scroll';
import translations from './translations';

function AppContent() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('AR');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Set RTL direction on initial load for Arabic
    useEffect(() => {
        document.documentElement.setAttribute('dir', 'rtl');
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    const toggleLanguage = () => {
        const newLang = language === 'EN' ? 'AR' : 'EN';
        setLanguage(newLang);
        // Set RTL direction for Arabic
        if (newLang === 'AR') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    };

    const t = translations[language];

    const navLinks = [
        { name: t.nav.about, to: "about" },
        { name: t.nav.experience, to: "experience" },
        { name: t.nav.services, to: "services" },
        { name: t.nav.portfolio, to: "portfolio" },
        { name: t.nav.contact, to: "contact" }
    ];

    return (
        <div className={`${darkMode ? 'dark' : ''} bg-primary text-white min-h-screen`}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <RouterLink to="/" className="text-2xl font-bold text-accent">
                        AK
                    </RouterLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {isHomePage ? (
                            <>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-300 hover:text-accent transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </>
                        ) : (
                            <RouterLink to="/" className="text-gray-300 hover:text-accent transition-colors">
                                {language === 'AR' ? 'الرئيسية' : 'Home'}
                            </RouterLink>
                        )}

                        <RouterLink to="/blog" className="text-gray-300 hover:text-accent transition-colors">
                            {t.blog.title}
                        </RouterLink>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 hover:bg-accent/10 transition-colors text-sm font-medium"
                        >
                            <span>🌐</span>
                            <span className="text-accent">{language === 'EN' ? 'العربية' : 'English'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 px-2 py-1 rounded-full border border-accent/30 hover:bg-accent/10 transition-colors text-xs"
                        >
                            <span>🌐</span>
                            <span className="text-accent">{language === 'EN' ? 'AR' : 'EN'}</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<HomePage language={language} t={t} />} />
                <Route path="/blog" element={<Blog language={language} t={t.blog} />} />
                <Route path="/blog/:slug" element={<BlogPost language={language} t={t.blog} />} />
                <Route path="/admin" element={<BlogAdmin language={language} t={t.blog} />} />
                <Route path="/admin/editor" element={<BlogEditor language={language} />} />
                <Route path="/admin/editor/:slug" element={<BlogEditor language={language} />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
