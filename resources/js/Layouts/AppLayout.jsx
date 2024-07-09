import React from 'react';
import { Link, Inertia } from '@inertiajs/inertia-react';

const handleLogout = () => {
    Inertia.post('/logout')
        .then(() => {
            // Redirect to login page after successful logout
            Inertia.visit('/login');
        })
        .catch((error) => {
            console.error('Logout error:', error);
            // Optionally handle error here, e.g., show a message to the user
        });
};

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-gray-800 text-lg">
                                SysQube Blog
                            </Link>
                        </div>
                        {/* Navigation Links */}
                        <div className="hidden sm:block">
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
                                    activeClassName="text-gray-800 border-b-2 border-gray-800"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
                                    activeClassName="text-gray-800 border-b-2 border-gray-800"
                                >
                                    Blog
                                </Link>   
                                <Link
                                    href="/posts.index"
                                    className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
                                    activeClassName="text-gray-800 border-b-2 border-gray-800"
                                >
                                    Post
                                </Link>
                                <Link
                                    href="/profile"
                                    className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
                                    activeClassName="text-gray-800 border-b-2 border-gray-800"
                                >
                                    Profile
                                </Link>
                            </div>
                        </div>
                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            
            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
