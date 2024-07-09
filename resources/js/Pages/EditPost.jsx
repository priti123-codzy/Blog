// resources/js/Pages/EditPost.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AppLayout from '../Layouts/AppLayout';

const EditPost = ({ post, categories }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [selectedCategory, setSelectedCategory] = useState(post.category_id);
    const [tags, setTags] = useState(post.tags);
    const [status, setStatus] = useState(post.status);
    const [featuredImage, setFeaturedImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('title', title);
        formData.append('body', body);
        formData.append('category_id', selectedCategory);
        formData.append('tags', tags);
        formData.append('status', status);
        if (featuredImage) {
            formData.append('featured_image', featuredImage);
        }

        Inertia.post(`/posts/${post.id}`, formData);
    };

    return (
        <AppLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Body</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Category</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                            <option value="4">Technology</option>
                            <option value="5">Education</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tags</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Featured Image</label>
                        <input
                            type="file"
                            onChange={(e) => setFeaturedImage(e.target.files[0])}
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Update Post
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default EditPost;
