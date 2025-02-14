import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes instead of Route

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* Wrap your routes with <Routes> */}
      <header>
        <h2>Friends Database</h2>
        <Link className='link' to="login">Login</Link>
        <Link className='link' to="friends">Friends List</Link>
        <Link className='link' to="friends/add">Add Friends</Link>
        <Link className='link' to="logout">Logout</Link>

      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />}/>
        <Route path="/friends/add" element={<AddFriends />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
