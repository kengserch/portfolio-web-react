import { ReactLenis } from 'lenis/react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                   // markers: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            });
        });
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience/>
                <Skill />
                <Project />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
}
