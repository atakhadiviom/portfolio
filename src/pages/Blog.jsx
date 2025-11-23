import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPosts, getCategories } from '../utils/blogUtils';

const Blog = ({ language, t }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const posts = getBlogPosts(language);
    const categories = getCategories(language);

    const filteredPosts = selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.categoryDisplay === selectedCategory);

    return (
        <section className="min-h-screen py-20 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t.title}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === 'all'
                                ? 'bg-accent text-primary'
                                : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                    >
                        {t.allCategories}
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-accent text-primary'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                                            {post.categoryDisplay}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="text-accent text-sm mb-2">
                                            {new Date(post.date).toLocaleDateString(language === 'AR' ? 'ar-OM' : 'en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-4 text-accent font-medium text-sm flex items-center gap-2">
                                            {t.readMore}
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">{t.noPosts}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
