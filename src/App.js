import React, { Fragment } from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/User/Users';
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/Layout/About';
import Contact from './Components/Layout/Contact';
import Userprofile from './Components/User/Userprofile';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {}
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
  // get single user data
  getUser = async username => {
    if (username.length > 0) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/${username}?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(res.data);
      this.setState({ user: res.data, loading: false });
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
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='githubfinder/contact' component={Contact} />
            <Route rxact path='githubfinder/about' component={About} />
            <Route
              exact
              path='githubfinder/'
              render={props => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clear={this.clear}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <div className='container'>
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </div>
                </Fragment>
              )}
            />
            <Route
              exact
              path='githubfinder/user/:login'
              render={props => (
                <Fragment>
                  <Userprofile
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
