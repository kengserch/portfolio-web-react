import { useRef, useEffect } from 'react';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const sectionRefs = useRef([]);

    const initActiveBox = () => {
        if (!lastActiveLink.current) return;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = lastActiveLink.current;
        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
    };

    useEffect(() => {
        initActiveBox();
        window.addEventListener('resize', initActiveBox);
        const handleScroll = () => {
            sectionRefs.current.forEach((section, index) => {
                if (!section) return;
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2.8 && rect.bottom >= window.innerHeight / 4) {
                    const link = document.querySelectorAll('.nav-link')[index];
                    if (link && link !== lastActiveLink.current) {
                        lastActiveLink.current?.classList.remove('active');
                        link.classList.add('active');
                        lastActiveLink.current = link;
                        activeBox.current.style.top = `${link.offsetTop}px`;
                        activeBox.current.style.left = `${link.offsetLeft}px`;
                        activeBox.current.style.width = `${link.offsetWidth}px`;
                        activeBox.current.style.height = `${link.offsetHeight}px`;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', initActiveBox);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        sectionRefs.current = navItems.map(({ link }) => document.querySelector(link));
    }, []);

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink,
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link',
        },
        {
            label: 'Experience',
            link: '#experience',
            className: 'nav-link',
        },
        {
            label: 'Project',
            link: '#project',
            className: 'nav-link',
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden',
        },
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a href={link} key={key} ref={ref} className={className}>
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
