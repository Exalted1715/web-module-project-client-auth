import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>

        <Route exact path="/friends">
          <FriendsList/>
        </Route>

        <Route exact path="/friends/add">
          <AddFriends/>
        </Route>
      </div>
      </Router>
  );
}

export default App;
