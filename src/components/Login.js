import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons from FontAwesome

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('https://mmfinfotech.co/machine_test/api/userLogin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
      });

      const data = await response.json();
      console.log('Login successful:', data);
      if (response.ok) {
        localStorage.setItem("authtoken", data.record.authtoken);
        navigate('/home');
      }

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-BLACK">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 py-2   text-white hover:bg-blue-600 transition duration-200 mb-4"
          >
            Login
          </button>
        </form>
        <div>
        <p className="text-gray-600 text-sm mb-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 flex items-center">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 flex items-center">
              <FaFacebook className="mr-2" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
