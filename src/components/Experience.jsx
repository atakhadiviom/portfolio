import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Digital Marketing Manager",
        company: "Smartek",
        period: "Nov 2023 - Present",
        location: "Muscat",
        description: "Leading digital marketing strategies and growth initiatives.",
        stats: [
            { label: "Revenue Growth", value: "+150%" },
            { label: "Team Size", value: "12+" },
            { label: "Campaigns", value: "50+" }
        ]
    },
    {
        role: "Digital Marketing Specialist",
        company: "Hermees Jewellery",
        period: "Jun 2022 - Nov 2023",
        location: "Mashhad",
        description: ""
    },
    {
        role: "Blockchain Specialist",
        company: "ArtLand House",
        period: "Feb 2021 - Nov 2023",
        location: "",
        description: ""
    },
    {
        role: "Digital Marketing Specialist",
        company: "Pishro hesab",
        period: "Jan 2021 - Nov 2023",
        location: "Mashhad",
        description: ""
    },
    {
        role: "Website Designer",
        company: "Monarch",
        period: "Mar 2023 - May 2023",
        location: "Canada",
        description: ""
    }
];

const Experience = ({ language, t }) => {
    return (
        <section className="py-20 px-6 bg-primary relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-accent font-medium text-lg mb-2 tracking-wide">{t.title}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{t.heading}</h3>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-accent rounded-full border-4 border-primary"></div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-gray-300 font-medium">{exp.company}</span>
                                    {exp.location && (
                                        <>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-gray-400 text-sm">{exp.location}</span>
                                        </>
                                    )}
                                </div>
                                {exp.description && (
                                    <p className="text-gray-400 text-sm mb-2">{exp.description}</p>
                                )}
                                {exp.stats && (
                                    <div className="grid grid-cols-3 gap-4 mt-4 mb-2">
                                        {exp.stats.map((stat, i) => (
                                            <div key={i} className="bg-white/5 p-2 rounded text-center border border-white/5">
                                                <div className="text-accent font-bold text-lg">{stat.value}</div>
                                                <div className="text-gray-400 text-xs">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {exp.link && (
                                    <a
                                        href={exp.link.startsWith('http') ? exp.link : `https://${exp.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent text-sm hover:underline"
                                    >
                                        {t.visitWebsite}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
