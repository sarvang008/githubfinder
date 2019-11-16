import React from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/User/Users';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />

        <h1>github finder </h1>
        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
