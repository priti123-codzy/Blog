// resources/js/Pages/CreatePost.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AppLayout from '../Layouts/AppLayout';

const CreatePost = ({ categories }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [tags, setTags] = useState('');
    const [featuredImage, setFeaturedImage] = useState(null);
    const [status, setStatus] = useState('draft');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('category_id', selectedCategory);
        formData.append('tags', tags);
        formData.append('featured_image', featuredImage);
        formData.append('status', status);

        Inertia.post('/posts', formData, {
            onError: (errors) => {
                setErrors(errors);
            },
        });
    };

    return (
        <AppLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        {errors.title && <div className="text-red-500">{errors.title}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Body</label>
                        <textarea
                            className="w-full mt-1 p-2 border rounded"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                        {errors.body && <div className="text-red-500">{errors.body}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Category</label>
                        <select
                            id="category_id"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category_id && <div className="text-red-500">{errors.category_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tags</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            required
                        />
                        {errors.tags && <div className="text-red-500">{errors.tags}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Featured Image</label>
                        <input
                            type="file"
                            className="w-full mt-1 p-2 border rounded"
                            onChange={(e) => setFeaturedImage(e.target.files[0])}
                        />
                        {errors.featured_image && <div className="text-red-500">{errors.featured_image}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Status</label>
                        <div className="mt-2">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="status"
                                    value="draft"
                                    checked={status === 'draft'}
                                    onChange={() => setStatus('draft')}
                                />
                                Draft
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="published"
                                    checked={status === 'published'}
                                    onChange={() => setStatus('published')}
                                />
                                Published
                            </label>
                        </div>
                        {errors.status && <div className="text-red-500">{errors.status}</div>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default CreatePost;
