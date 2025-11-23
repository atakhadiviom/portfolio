import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = ({ language, t }) => {
    return (
        <>
            <div id="hero"><Hero language={language} t={t.hero} /></div>
            <div id="about"><About language={language} t={t.about} /></div>
            <div id="experience"><Experience language={language} t={t.experience} /></div>
            <div id="education"><Education language={language} t={t.education} /></div>
            <div id="services"><Services language={language} t={t.services} /></div>
            <div id="portfolio"><Portfolio language={language} t={t.portfolio} /></div>
            <div id="testimonials"><Testimonials language={language} t={t.testimonials} /></div>
            <div id="contact"><Contact language={language} t={t.contact} /></div>
        </>
    );
};

export default HomePage;
