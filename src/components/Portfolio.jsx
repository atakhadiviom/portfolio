import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Smartek Ads Dashboard",
        category: "Digital Marketing",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=Smartek+Ads",
        description: "Comprehensive analytics dashboard for tracking ad performance across multiple platforms."
    },
    {
        title: "Daher Freelance Platform",
        category: "Web Development",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=Daher+Platform",
        description: "Freelancer marketplace connecting Iranian talent with global opportunities."
    },
    {
        title: "Noavaran Zibayi",
        category: "WordPress",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=Noavaran+Zibayi",
        description: "E-commerce solution for beauty products with custom theme development."
    },
    {
        title: "At A Course LMS",
        category: "Web Application",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=At+A+Course",
        description: "Learning Management System integrating YouTube content for streamlined education."
    },
    {
        title: "Hamgam Rayan",
        category: "Corporate Site",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=Hamgam+Rayan",
        description: "Corporate website for IT consultancy firm featuring service showcase."
    },
    {
        title: "Kavizdiklen",
        category: "WordPress",
        image: "https://placehold.co/600x400/001F3F/FFD700?text=Kavizdiklen",
        description: "Custom WordPress build for local business with SEO optimization."
    }
];

const Portfolio = ({ language, t }) => {
    return (
        <section className="py-20 px-6 bg-primary/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-accent font-medium text-lg mb-2 tracking-wide">{t.title}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{t.heading}</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-sm font-medium mb-2">{project.category}</span>
                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
