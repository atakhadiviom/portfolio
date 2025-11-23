import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "WordPress / Django Site Build",
        price: "250 OMR",
        period: "one-time",
        features: [
            "Custom Design & Development",
            "Responsive Mobile Layout",
            "SEO Optimization",
            "Admin Panel Setup",
            "1 Month Support"
        ],
        highlight: false
    },
    {
        title: "Meta Ads & Digital Marketing",
        price: "300 OMR",
        period: "per month",
        features: [
            "Campaign Strategy & Setup",
            "Ad Creative Design",
            "Audience Targeting",
            "Performance Analytics",
            "Weekly Reports"
        ],
        highlight: true
    },
    {
        title: "Odoo ERP Setup & Optimization",
        price: "200 OMR",
        period: "one-time",
        features: [
            "Module Installation",
            "Workflow Automation",
            "User Training",
            "Data Migration",
            "System Configuration"
        ],
        highlight: false
    }
];

const Services = ({ language, t }) => {
    const servicesData = [
        {
            title: t.packages[0].title,
            price: "250 OMR",
            period: "one-time",
            features: t.packages[0].features,
            highlight: false
        },
        {
            title: t.packages[1].title,
            price: "300 OMR",
            period: "per month",
            features: t.packages[1].features,
            highlight: true
        },
        {
            title: t.packages[2].title,
            price: "200 OMR",
            period: "one-time",
            features: t.packages[2].features,
            highlight: false
        }
    ];

    return (
        <section className="py-20 px-6 bg-primary relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10"></div>

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

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${service.highlight ? 'border-accent bg-white/10' : 'border-white/10 bg-white/5'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                        >
                            {service.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                                    {t.mostPopular}
                                </div>
                            )}
                            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-accent">{service.price}</span>
                                <span className="text-gray-400 text-sm">/{language === 'EN' ? service.period : (service.period === 'one-time' ? t.oneTime : t.perMonth)}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-accent">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${service.highlight ? 'bg-accent text-primary hover:bg-white' : 'bg-white/10 text-white hover:bg-accent hover:text-primary'}`}>
                                {t.getStarted}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
