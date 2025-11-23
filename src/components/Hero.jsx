import React from 'react';
import { motion } from 'framer-motion';
import { PopupButton } from 'react-calendly';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Hero = ({ language, t }) => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20 relative overflow-hidden bg-primary">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Radial Gradients */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 max-w-2xl z-10 relative"
            >
                <div className="inline-block px-3 py-1 mb-4 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {t.greeting} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] filter brightness-110">
                        {t.name}
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-200 mb-6 font-light tracking-wide">
                    {t.subtitle} <span className="font-semibold text-white bg-accent/10 px-2 py-1 rounded">{t.code}</span> {t.and} <span className="font-semibold text-white bg-accent/10 px-2 py-1 rounded">{t.strategy}</span>
                </h2>

                <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed border-l-2 border-accent/50 pl-4">
                    {t.description} <span className="text-accent font-semibold">{t.wordpress}</span>, <span className="text-accent font-semibold">{t.odoo}</span>, <span className="text-accent font-semibold">{t.django}</span> {t.and} <span className="text-accent font-semibold">{t.metaAds}</span>{t.descriptionEnd}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://wa.me/96871150483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg shadow-accent/20"
                    >
                        <FaWhatsapp className="text-xl" />
                        {t.whatsapp}
                    </a>
                    <PopupButton
                        url="https://calendly.com/atakhadivi"
                        rootElement={document.getElementById("root")}
                        text={`🗓️ ${t.bookConsult}`}
                        className="text-accent font-bold py-3 px-8 border-2 border-accent rounded-full hover:bg-accent/10 transition-colors"
                    />
                </div>

                {/* Social Links */}
                <div className="flex gap-8 mt-6">
                    <a href="https://linkedin.com/in/atakhadivi" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/atakhadivi" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com/atakhadivi" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/atakhadivi" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors text-2xl">
                        <FaGithub />
                    </a>
                </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative z-10"
            >
                <div className="relative group">
                    {/* Rotating Border */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent via-yellow-200 to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>

                    {/* Image Container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50"></div>
                        <div className="relative rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl shadow-accent/20 w-64 h-64 md:w-80 md:h-80">
                            {/* Golden Tint Overlay */}
                            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
                            <img
                                src={profileImage}
                                alt="Ata Khadivi"
                                className="w-full h-full object-cover filter contrast-110 brightness-105"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
