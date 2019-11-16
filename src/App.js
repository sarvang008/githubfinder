import React from 'react';

import './App.css';
import head from './head.js';

class App extends React.Component {
  render() {
    const name = 'john';
    const upper = name => {
      return name.toUpperCase();
    };
    return (
      <div className='App'>
        <head />
        <h1>github finder{upper(name)} </h1>
      </div>
    );
  }
}

export default App;
