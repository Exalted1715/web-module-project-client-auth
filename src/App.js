import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of Route

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';

function App() {
  return (
    <div className="App">
      {/* Wrap your routes with <Routes> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
      </Routes>
    </div>
  );
}

export default App;
