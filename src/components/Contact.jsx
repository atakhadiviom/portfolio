import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = ({ language, t }) => {
    return (
        <footer className="bg-primary pt-20 pb-10 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-accent font-medium text-lg mb-2 tracking-wide">{t.title}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.heading}</h3>
                        <p className="text-gray-300 mb-8 max-w-md">
                            {t.description}
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:atakhadivi@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                                <FaEnvelope className="text-xl" />
                                <span>atakhadivi@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/atakhadivi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                                <FaLinkedin className="text-xl" />
                                <span>linkedin.com/in/atakhadivi</span>
                            </a>
                            <a href="https://wa.me/96871150483" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                                <FaWhatsapp className="text-xl" />
                                <span>+968 7115 0483</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.name}</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder={t.namePlaceholder} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.email}</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder={t.emailPlaceholder} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.message}</label>
                                <textarea rows="4" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder={t.messagePlaceholder}></textarea>
                            </div>
                            <button type="submit" className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-white transition-colors">
                                {t.send}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
                    © {new Date().getFullYear()} Ata Khadivi-Heravizadeh. {t.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Contact;
