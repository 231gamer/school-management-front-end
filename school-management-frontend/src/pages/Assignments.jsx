import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Assignments = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Assignments - School Management</title>
            </Head>
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-semibold">Assignments</h1>
            </header>
            <main className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">Manage Assignments</h2>
                    <Link href="/create-assignment">
                        <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Create Assignment</a>
                    </Link>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-medium mb-2">Assignments List</h3>
                    {/* Placeholder for assignments list */}
                    <p className="text-gray-600">No assignments available.</p>
                </div>
            </main>
        </div>
    );
};

export default Assignments;