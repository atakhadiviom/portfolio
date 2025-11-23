import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Digital Marketing Manager",
        company: "Smartek",
        period: "Nov 2023 - Present",
        location: "Muscat",
        description: "Leading digital marketing strategies and growth initiatives."
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
    },
    {
        role: "Website Developer & Social Media Manager",
        company: "Mazzehoio",
        period: "Oct 2019 - Jul 2022",
        location: "Mashhad",
        description: ""
    },
    {
        role: "WordPress Developer",
        company: "noavaran zibayi",
        period: "Dec 2018 - Jul 2022",
        location: "Mashhad",
        link: "http://noavaranzibayi.ir/"
    },
    {
        role: "Website Administrator",
        company: "Persian Part Co",
        period: "Aug 2017 - Jul 2022",
        location: "Mashhad",
        description: ""
    },
    {
        role: "CEO",
        company: "At A course",
        period: "Apr 2019 - Apr 2020",
        link: "https://atacourse.com",
        description: "Learn from YouTube with our LMS system."
    },
    {
        role: "IT Consultant",
        company: "Takwall",
        period: "Jun 2019 - Oct 2019",
        location: "Mashhad",
        link: "Takwall.com",
        description: "Vendor marketing in Mashhad."
    },
    {
        role: "Website Designer",
        company: "hamgam rayan shomal",
        period: "Mar 2019 - Oct 2019",
        location: "Mashhad",
        link: "https://hamgamrayan.com/"
    },
    {
        role: "WordPress Developer",
        company: "kavizdiklen",
        period: "Dec 2018 - Oct 2019",
        location: "Mashhad",
        link: "http://kavizdiklen.com/"
    },
    {
        role: "CEO",
        company: "Daher",
        period: "Nov 2017 - Oct 2019",
        location: "Mashhad",
        link: "https://daher.ir",
        description: "Freelancer framework for Iranian people."
    },
    {
        role: "Website Designer",
        company: "Be Farm",
        period: "Sep 2018 - Jan 2019",
        location: "Mashhad",
        link: "http://gandomdasht.co/"
    },
    {
        role: "C++ Developer",
        company: "ARIOcoin",
        period: "Aug 2018 - Dec 2018",
        location: "Mashhad",
        description: ""
    },
    {
        role: "WordPress Developer",
        company: "fath optics",
        period: "Aug 2018 - Sep 2018",
        location: "Mashhad",
        link: "http://www.fathoptics.ir"
    },
    {
        role: "Website Designer",
        company: "Open Learning Center Of STU",
        period: "Dec 2017 - Feb 2018",
        location: "Mashhad",
        link: "olc.sadjad.ac.ir"
    },
    {
        role: "Web Designer",
        company: "persian part",
        period: "Jun 2017 - Aug 2017",
        location: "Mashhad",
        description: ""
    },
    {
        role: "WordPress Developer",
        company: "Parsghate",
        period: "Jun 2017 - Jul 2017",
        location: "Mashhad",
        description: ""
    },
    {
        role: "WordPress Developer",
        company: "nik store",
        period: "May 2016 - Jun 2017",
        location: "Mashhad",
        description: ""
    },
    {
        role: "Marketer",
        company: "Cliven",
        period: "Apr 2013 - May 2015",
        location: "Mashhad",
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
