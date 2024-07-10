import React from 'react';
import { useState, useEffect } from 'react';
import Layout from './Layout';
const Dashboard = () => {
    const [totalUser, setTotalUser] = useState(1);

    useEffect(() => {
        fetchUsers();
      }, []);
      
    const fetchUsers = async () => {
        const token = localStorage.getItem('authtoken');
        try {
          let url = `https://mmfinfotech.co/machine_test/api/userList?"`;
    
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        
        const result = await response.json();
        setTotalUser(result.total);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  return (
    <Layout>
         <h1 className="text-3xl font-bold mb-16">Dashboard</h1>
        <div className="min-h-96 flex flex-col items-center justify-center bg-gray-100">
     
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-700">Users</h2>
        <p className="text-3xl font-bold text-gray-900">{totalUser}</p>
      </div>
    </div>
    </Layout>
    
  );
};

export default Dashboard;
