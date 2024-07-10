import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { UserList } from './components/Userlist';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userlist" element={<UserList/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
        
        </Route>
      </Routes>
    </Router>
  );  
}

export default App;
