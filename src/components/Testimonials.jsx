import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Ata tripled our Instagram traffic in 2 months. His strategic approach to digital marketing is unmatched in Muscat.",
        author: "Ahmed Al-Said",
        role: "CEO, Muscat Retail Co."
    },
    {
        quote: "The Odoo implementation was seamless. Ata understood our business processes perfectly and automated our workflow.",
        author: "Sarah Johnson",
        role: "Operations Director, TechFlow"
    },
    {
        quote: "Our new website is faster, looks amazing, and actually converts visitors into customers. Highly recommended!",
        author: "Mohammed Al-Harthy",
        role: "Founder, Oman Ventures"
    }
];

const Testimonials = ({ language, t }) => {
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

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
                        >
                            <div className="text-accent text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
                            <p className="text-gray-300 mb-6 relative z-10 pt-4 italic">
                                {testimonial.quote}
                            </p>
                            <div>
                                <h4 className="text-white font-bold">{testimonial.author}</h4>
                                <p className="text-accent text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
