// resources/js/Pages/Dashboard.jsx

import React from 'react';
import AppLayout from '../Layouts/AppLayout';

const Dashboard = () => {
    return (
        <AppLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <p>Welcome to the dashboard!</p>

                <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Mark Otto</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Backend Developer</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">mark@example.com</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">$120,000</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
