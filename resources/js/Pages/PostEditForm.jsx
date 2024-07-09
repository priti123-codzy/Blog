// resources/js/Pages/PostEditForm.jsx

import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AppLayout from '../Layouts/AppLayout';

const PostEditForm = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [category, setCategory] = useState(post.category);
    const [tags, setTags] = useState(post.tags);
    const [status, setStatus] = useState(post.status);
    const [featuredImage, setFeaturedImage] = useState(null);

    useEffect(() => {
        setTitle(post.title);
        setBody(post.body);
        setCategory(post.category);
        setTags(post.tags);
        setStatus(post.status);
        // Assuming `post.featured_image` is the file path or URL of the current image
        // You might need additional handling for the image display or selection
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PUT'); // Laravel requires this to simulate a PUT request
        formData.append('title', title);
        formData.append('body', body);
        formData.append('category', category);
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
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
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

export default PostEditForm;
