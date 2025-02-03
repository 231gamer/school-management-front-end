import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const Attendance = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Attendance Management</title>
            </Head>
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">Attendance Management</h1>
            </header>
            <main className="p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Class</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
                                <option>Select Class</option>
                                <option>Class 1</option>
                                <option>Class 2</option>
                                <option>Class 3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Student</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
                                <option>Select Student</option>
                                <option>Student 1</option>
                                <option>Student 2</option>
                                <option>Student 3</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <label className="ml-2 text-gray-700">Present</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Attendance;