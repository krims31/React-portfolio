import { useState, useEffect } from 'react';

export const useScrollTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);

            document.documentElement.style.scrollBehavior = 'auto';
        }
    }, []);
    return showScrollTop
}