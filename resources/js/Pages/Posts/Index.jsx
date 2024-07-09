// resources/js/Pages/Posts/Index.jsx

import React from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { Link } from '@inertiajs/inertia-react';

const Index = ({ posts }) => {
    return (
        <AppLayout>
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                        {post.featured_image && (
                            <img 
                                className="mb-4 rounded object-contain w-full h-48" 
                                src={`/storage/${post.featured_image}`} 
                                alt={post.title} 
                            />
                        )}
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                        <p className="text-gray-600">{post.category_id}</p>
                        <p className="text-gray-600">{post.tags}</p>
                        <p className="text-gray-600">{post.status}</p>
                        <div className="mt-4 flex space-x-4">
                            <Link href={`/posts/${post.id}/edit`} className="text-blue-500">Edit</Link>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (confirm("Are you sure you want to delete this post?")) {
                                        Inertia.delete(`/posts/${post.id}`);
                                    }
                                }}
                            >
                                <button type="submit" className="text-red-500">Delete</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
};

export default Index;
