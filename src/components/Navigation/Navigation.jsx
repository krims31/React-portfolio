import React, { useState, useEffect } from 'react';
import './Navigation.css'; // Импортируем CSS файл

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        closeMobileMenu();
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#Projects', label: 'Projects' },
        { href: '#Skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="nav-container">
                <div className="nav-content">
                    <div 
                        className="logo"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <h1>Portfolio</h1>
                    </div>

                    <div className="desktop-menu">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                            >
                                {item.label}
                            </a>  
                        ))}
                    </div>

                    <button 
                        className="mobile-menu-button"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="mobile-menu-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                            >
                                {item.label}
                            </a>  
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navigation;