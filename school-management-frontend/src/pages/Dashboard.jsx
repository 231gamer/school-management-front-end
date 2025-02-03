import React from 'react';
import { useRouter } from 'next/router';
import AdminDashboard from '../components/AdminDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import ParentDashboard from '../components/ParentDashboard';
import StudentDashboard from '../components/StudentDashboard';
import { useUserRole } from '../hooks/useUserRole';

const Dashboard = () => {
    const router = useRouter();
    const { role } = useUserRole();

    if (!role) {
        router.push('/login');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {role === 'Admin' && <AdminDashboard />}
            {role === 'Teacher' && <TeacherDashboard />}
            {role === 'Parent' && <ParentDashboard />}
            {role === 'Student' && <StudentDashboard />}
        </div>
    );
};

export default Dashboard;