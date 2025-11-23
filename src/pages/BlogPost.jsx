import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPost } from '../utils/blogUtils';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaArrowLeft } from 'react-icons/fa';

const BlogPost = ({ language, t }) => {
    const { slug } = useParams();
    const post = getBlogPost(slug, language);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">{t.notFound}</h1>
                    <Link to="/blog" className="text-accent hover:underline">
                        {t.backToBlog}
                    </Link>
                </div>
            </div>
        );
    }

    const shareUrl = window.location.href;
    const shareText = post.title;

    return (
        <section className="min-h-screen py-20 px-6 bg-primary">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8"
                >
                    <FaArrowLeft />
                    {t.backToBlog}
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                            {post.categoryDisplay}
                        </span>
                        <span className="text-gray-400 text-sm">
                            {new Date(post.date).toLocaleDateString(language === 'AR' ? 'ar-OM' : 'en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {post.excerpt}
                    </p>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 rounded-2xl overflow-hidden"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Share Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10"
                >
                    <span className="text-gray-400">{t.share}:</span>
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors text-xl"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors text-xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors text-xl"
                    >
                        <FaTwitter />
                    </a>
                </motion.div>

                {/* Content */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-bold
                        prose-ul:text-gray-300 prose-ul:my-6
                        prose-li:my-2
                        prose-code:text-accent prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </motion.article>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 bg-accent/10 border border-accent/30 rounded-2xl text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">{t.ctaTitle}</h3>
                    <p className="text-gray-300 mb-6">{t.ctaText}</p>
                    <a
                        href="https://wa.me/96871150483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors"
                    >
                        <FaWhatsapp />
                        {t.ctaButton}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogPost;
