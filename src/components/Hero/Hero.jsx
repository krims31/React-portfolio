import { useState, useEffect } from "react";
import { heroData } from "../../data/hero";
import './Hero.css';

const Hero = ({ hasAnimated }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const { roles, name, description, stats } = heroData;

    useEffect(() => {
        const currentRole = roles[currentTextIndex];

        if (!isDeleting) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setTypingSpeed(150);
                setCurrentTextIndex((prev) => (prev + 1) % roles.length);
            }
        }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    // SVG иконки
    const ArrowDownIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21l-12-18h24z"/>
        </svg>
    );

    const GithubIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );

    const MailIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
    );

    const TelegramIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.537.26l.213-3.05 5.56-5.02c.22-.198-.048-.312-.342-.11l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.57-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
    );

    return (
        <section className="hero-section" id="home">
            <div className="hero-background-elements">
                {/* Существующие круги */}
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                
                {/* Новые шары */}
                <div className="gradient-ball-left"></div>
                <div className="gradient-ball-center"></div>
                <div className="gradient-ball-top-right"></div>
                <div className="gradient-ball-small-1"></div>
                <div className="gradient-ball-small-2"></div>
            </div>
            
            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm {name}</h1>
                
                <div className="hero-subtitle">
                    I'm a <span className="typing-text">{currentText}</span>
                </div>
                
                <p className="hero-description">
                    {description}
                </p>
                
                <div className="hero-buttons">
                    <button className="primary-btn" onClick={scrollToAbout}>
                        <span>View My Work</span>
                        <ArrowDownIcon />
                    </button>
                    <a href="#contact" className="secondary-btn">
                        Contact Me
                    </a>
                </div>
                
                <div className="social-links">
                    <a href="https://github.com/krims31" className="social-link" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="mailto:krims31@mail.ru" className="social-link">
                        <MailIcon />
                    </a>
                    <a href="https://t.me/krims42" className="social-link" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon />
                    </a>
                </div>

                {/* Блок статистики */}
                <div className="hero-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
                
                <div className="scroll-down" onClick={scrollToAbout}>
                    <ArrowDownIcon />
                </div>
            </div>
        </section>
    )
}

export default Hero;