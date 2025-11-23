import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPost, saveBlogPost, generateSlug, loadBlogPosts } from '../utils/blogUtils';
import { FaSave, FaTimes, FaEye } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const BlogEditor = ({ language }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        slug: '',
        titleAr: '',
        titleEn: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Digital Marketing',
        categoryAr: 'التسويق الرقمي',
        excerptAr: '',
        excerptEn: '',
        image: '',
        keywords: [],
        contentAr: '',
        contentEn: ''
    });

    useEffect(() => {
        if (slug) {
            // Load existing post
            const posts = loadBlogPosts();
            const post = posts.find(p => p.slug === slug);
            if (post) {
                setFormData({
                    ...post,
                    keywords: post.keywords || []
                });
            }
        }
    }, [slug]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate slug from English title
        if (name === 'titleEn' && !slug) {
            setFormData(prev => ({
                ...prev,
                slug: generateSlug(value)
            }));
        }
    };

    const handleKeywordsChange = (e) => {
        const keywords = e.target.value.split(',').map(k => k.trim()).filter(k => k);
        setFormData(prev => ({
            ...prev,
            keywords
        }));
    };

    const handleSave = () => {
        if (!formData.titleAr || !formData.titleEn || !formData.slug) {
            alert('Please fill in at least the titles and slug');
            return;
        }

        saveBlogPost(formData);
        alert('Post saved successfully!');
        navigate('/admin');
    };

    return (
        <section className="min-h-screen py-20 px-6 bg-primary">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">
                            {slug ? 'Edit Post' : 'Create New Post'}
                        </h1>
                        <p className="text-gray-400">Fill in both Arabic and English content</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <FaEye />
                            {showPreview ? 'Edit' : 'Preview'}
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 bg-accent text-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors"
                        >
                            <FaSave />
                            Save
                        </button>
                        <Link
                            to="/admin"
                            className="flex items-center gap-2 bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <FaTimes />
                            Cancel
                        </Link>
                    </div>
                </div>

                {!showPreview ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Arabic Form */}
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">Arabic Content (العربية)</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Title (العنوان)</label>
                                    <input
                                        type="text"
                                        name="titleAr"
                                        value={formData.titleAr}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="عنوان المقال"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Category (التصنيف)</label>
                                    <input
                                        type="text"
                                        name="categoryAr"
                                        value={formData.categoryAr}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="التسويق الرقمي"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Excerpt (الملخص)</label>
                                    <textarea
                                        name="excerptAr"
                                        value={formData.excerptAr}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="ملخص قصير للمقال"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Content (المحتوى) - Markdown</label>
                                    <textarea
                                        name="contentAr"
                                        value={formData.contentAr}
                                        onChange={handleChange}
                                        rows="15"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent font-mono text-sm"
                                        placeholder="# العنوان الرئيسي&#10;&#10;المحتوى هنا..."
                                        dir="rtl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* English Form */}
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">English Content</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="titleEn"
                                        value={formData.titleEn}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="Post Title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Slug (URL)</label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="post-url-slug"
                                        disabled={!!slug}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="Digital Marketing"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="https://... or /path/to/image.png"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Keywords (comma-separated)</label>
                                    <input
                                        type="text"
                                        value={formData.keywords.join(', ')}
                                        onChange={handleKeywordsChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Excerpt</label>
                                    <textarea
                                        name="excerptEn"
                                        value={formData.excerptEn}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                                        placeholder="Short summary of the post"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Content - Markdown</label>
                                    <textarea
                                        name="contentEn"
                                        value={formData.contentEn}
                                        onChange={handleChange}
                                        rows="15"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent font-mono text-sm"
                                        placeholder="# Main Heading&#10;&#10;Content here..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-6">{formData.titleAr || formData.titleEn}</h2>
                        {formData.image && (
                            <img src={formData.image} alt="Preview" className="w-full h-64 object-cover rounded-xl mb-6" />
                        )}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <ReactMarkdown>{formData.contentAr || formData.contentEn}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogEditor;
