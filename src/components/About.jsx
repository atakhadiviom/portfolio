import React from 'react';
import { motion } from 'framer-motion';

const About = ({ language, t }) => {
    const skills = [
        "Prompt Engineering", "Odoo", "Django", "WordPress",
        "Meta Ads", "React", "Tailwind CSS", "Python"
    ];

    return (
        <section className="py-20 px-6 bg-primary/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-accent font-medium text-lg mb-2 tracking-wide">{t.title}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t.heading}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                            {t.description}
                        </p>
                        <div className="flex gap-4 mb-8">
                            <div>
                                <span className="block text-accent font-bold text-xl">{t.persian}</span>
                                <span className="text-sm text-gray-400">{t.professional}</span>
                            </div>
                            <div className="w-px bg-gray-700"></div>
                            <div>
                                <span className="block text-accent font-bold text-xl">{t.english}</span>
                                <span className="text-sm text-gray-400">{t.limitedWorking}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-white mb-6">{t.topSkills}</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-primary border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-primary transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
