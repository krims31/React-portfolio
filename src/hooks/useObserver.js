import { useState, useEffect } from 'react'

export const useObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        setHasAnimated(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.5 }
        )
        document.querySelectorAll('[id]').forEach((el) => observer.observe(el))

        return () => {
            observer.disconnect()
        };
    }, [hasAnimated]);

    return hasAnimated
}