import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <h3> Links </h3>
      <Link to='/friends/add'>Add a friend</Link>
      <Link to='/'>Login</Link>
    
      <Switch>
        <Route path='/logout' />
        <Route path='/friends/add' component={AddFriend}/>
        <Route path='/friends' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>

    </div>
  );
}

export default App;
