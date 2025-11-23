import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ language, t }) => {
    const education = [
        {
            degree: "BE Computer Science",
            school: "Payame Noor University",
            period: "2019 - 2023"
        },
        {
            degree: "BE Biomedical Engineering",
            school: "Sadjad University",
            period: "2013 - 2018"
        }
    ];

    const certifications = [
        "Social Engineering and Manipulation",
        "Instagram for Business",
        "Campaign Performance with Ads Manager",
        "Creative Best Practices",
        "Essentials of Cybersecurity",
        "Leadership"
    ];

    return (
        <section className="py-20 px-6 bg-primary/50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-accent">🎓</span> {t.educationTitle}
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/30 transition-colors">
                                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                <p className="text-accent mt-1">{edu.school}</p>
                                <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-accent">📜</span> {t.certificationsTitle}
                    </h3>
                    <div className="grid gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-gray-200 font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
