import React from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/User/Users';
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  /*
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }*/

  //Search User
  searchUser = async text => {
    if (text.length > 0) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(res.data);
      this.setState({ users: res.data.items, loading: false });
    }
  };
  clear = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = msg => {
    this.setState({ alert: { msg: msg } });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Alert alert={this.state.alert} />
        <Search
          searchUser={this.searchUser}
          clear={this.clear}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />

        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
