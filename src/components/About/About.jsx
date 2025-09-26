import React from "react";
import { Github, Mail, Code, Palette, Smartphone, ExternalLink } from 'lucide-react';
import "./About.css";

const About = () => {
    const features = [
        {
            icon: <Code size={32} />,
            title: 'Clean Code',
            description: 'Writing maintainable and efficient code with best practices and modern patterns.'
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Design',
            description: 'Creating intuitive and beautiful user interfaces focused on user experience.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Responsive Design',
            description: 'Building websites that work perfectly on all devices and screen sizes.'
        },
        {
            icon: <ExternalLink size={32} />,
            title: 'Open Source',
            description: 'Contributing to open source projects and sharing knowledge with community.'
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                
                <div className="about-content">
                    {/* Левая часть - текст и соцсети */}
                    <div className="about-text">
                        <div className="about-description">
                            <p>I'm a frontend developer with 1+ years of experience creating exceptional digital experiences. I specialize in modern web technologies and love turning ideas into reality.</p>
                            <p>My goal is to create websites and applications that are not only functional but also provide an amazing user experience.</p>
                        </div>
                        
                        <div className="about-social-links">
                            <a href="https://github.com/krims31" className="social-link" target="_blank" rel="noopener noreferrer">
                                <Github size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:krims31@mail.ru" className="social-link" target="_blank" rel="noopener noreferrer">
                                <Mail size={24} />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Правая часть - карточки */}
                    <div className="about-features">
                        {features.map((feature, index) => (
                            <div key={index} className="about-feature">
                                <div className="about-feature-icon">{feature.icon}</div>
                                <h3 className="about-feature-title">{feature.title}</h3>
                                <p className="about-feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;