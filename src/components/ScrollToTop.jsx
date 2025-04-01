import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the route changes
    }, [pathname]);

    useEffect(() => {
        const handleAnchorClick = (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
                window.scrollTo(0, 0); // Scrolls to the top on internal link click
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return null;
};

export default ScrollToTop;
