import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadBlogPosts, deleteBlogPost } from '../utils/blogUtils';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const BlogAdmin = ({ language, t }) => {
    const [posts, setPosts] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Simple password check (in production, use proper authentication)
    const ADMIN_PASSWORD = 'admin123'; // Change this!

    useEffect(() => {
        const auth = localStorage.getItem('blog_admin_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
            loadPosts();
        }
    }, []);

    const loadPosts = () => {
        const allPosts = loadBlogPosts();
        setPosts(allPosts);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('blog_admin_auth', 'true');
            setIsAuthenticated(true);
            loadPosts();
        } else {
            alert('Incorrect password!');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('blog_admin_auth');
        setIsAuthenticated(false);
        setPassword('');
    };

    const handleDelete = (slug) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deleteBlogPost(slug);
            loadPosts();
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-md w-full"
                >
                    <h1 className="text-3xl font-bold text-white mb-6 text-center">
                        Blog Admin Login
                    </h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent mb-4"
                        />
                        <button
                            type="submit"
                            className="w-full bg-accent text-primary font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="min-h-screen py-20 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Blog Admin</h1>
                        <p className="text-gray-400">Manage your blog posts</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            to="/admin/editor"
                            className="flex items-center gap-2 bg-accent text-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors"
                        >
                            <FaPlus />
                            New Post
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Posts Table */}
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-white/5">
                            <tr>
                                <th className="text-left p-4 text-gray-300 font-medium">Title (AR)</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Category</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Date</th>
                                <th className="text-right p-4 text-gray-300 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={post.slug} className="border-t border-white/10 hover:bg-white/5">
                                    <td className="p-4 text-white">{post.titleAr}</td>
                                    <td className="p-4 text-gray-400">{post.categoryAr}</td>
                                    <td className="p-4 text-gray-400">
                                        {new Date(post.date).toLocaleDateString('ar-OM')}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="p-2 text-gray-400 hover:text-accent transition-colors"
                                                title="View"
                                            >
                                                <FaEye />
                                            </Link>
                                            <Link
                                                to={`/admin/editor/${post.slug}`}
                                                className="p-2 text-gray-400 hover:text-accent transition-colors"
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post.slug)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg mb-4">No posts yet</p>
                        <Link
                            to="/admin/editor"
                            className="inline-flex items-center gap-2 bg-accent text-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors"
                        >
                            <FaPlus />
                            Create Your First Post
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogAdmin;
