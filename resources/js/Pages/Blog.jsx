import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import AppLayout from '../Layouts/AppLayout';

const Blog = ({ posts }) => {
    return (
        <AppLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
                <div className="mb-4">
                    <a href="/posts/create" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Create New Post
                    </a>
                </div>

                <div className="flex flex-wrap space-x-4">
                    {posts.length ? (
                        posts.map(post => (
                            <div key={post.id} className="mb-4 p-6 bg-white rounded-lg shadow-md w-80 flex-shrink-0">
                                {post.featured_image && (
                                    <img 
                                        className="mb-4 rounded object-contain w-full h-48" 
                                        src={`/storage/${post.featured_image}`} 
                                        alt={post.title} 
                                    />
                                )}
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
                                <p className="text-gray-600">Category: {post.category}</p>
                                <p className="text-gray-600">Tags: {post.tags}</p>
                                <p className="text-gray-600">Status: {post.status}</p>
                                <div className="mt-4 flex space-x-4">
                                    <a href={`/posts/${post.id}/edit`} className="text-blue-500">Edit</a>
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
                        ))
                    ) : (
                        <p>No posts available</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default Blog;
