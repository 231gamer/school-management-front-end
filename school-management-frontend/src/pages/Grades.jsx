import React from 'react';

const Grades = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Grades</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Student Name</th>
                            <th className="py-2 px-4 border-b">Subject</th>
                            <th className="py-2 px-4 border-b">Grade</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="py-2 px-4 border-b">John Doe</td>
                            <td className="py-2 px-4 border-b">Mathematics</td>
                            <td className="py-2 px-4 border-b">A</td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Grades;