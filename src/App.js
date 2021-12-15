import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute';

function App() {
   
  return (
    <Router className="App">
    
      <header> 
        <Link className='link' to='/'>Login</Link>
        <Link className='link' to='/friends/add'>Add a friend</Link>
        <Link className='link' to='/friends'> Friends</Link>
        <Link className='link' to='/logout'>Logout</Link>
      </header>

      <Switch>
       <PrivateRoute path='/logout' component={Logout}/>
       <PrivateRoute path='/friends/add' component={AddFriend}/>
       <PrivateRoute path='/friends' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>

    </Router>
  );
}

export default App;
