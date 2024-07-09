import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard({ user, posts }) {
    return (
        <div>
            <Head title="User Dashboard" />

            <h1>Welcome, {user.name}!</h1>
            <p>Your email: {user.email}</p>

            <h2>Your Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
