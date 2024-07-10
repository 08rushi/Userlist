import React from 'react';
import Layout from './Layout';
import User from '../assets/user.webp';

export const Home = () => {
  return (
    <Layout>
      <div>
      <h1 className="text-3xl font-bold mb-8">Home Page</h1>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 text-[50px] mb-8">Welcome to the home page!</p>
        <img
          src={User}
          alt="Centered"
          className="w-full max-w-xs mb-32"
        />
      </div>
      </div>
      
    </Layout>
  );
};
