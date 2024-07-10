import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    try {
      const response = await fetch('https://mmfinfotech.co/machine_test/api/userRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          first_name: firstName, 
          last_name: lastName, 
          phone_no: phoneNumber, 
          email, 
          password, 
          confirm_password: password, 
          country_code: "+91" 
        })
      });

      const data = await response.json();
      console.log('Register successful:', data);
      
      if (data.status) {
        localStorage.setItem("authtoken", data.data.token);
        navigate('/home');
      } else {
        setError(data.message);
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-3 py-2 border rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
