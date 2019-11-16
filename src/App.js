import React from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/User/Users';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />

        <h1>github finder </h1>
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
