import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/User/Users';

import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/Layout/About';
import Contact from './Components/Layout/Contact';
import Userprofile from './Components/User/Userprofile';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  /*
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }*/

  // const [alert, setAlert] = useState(null);

  //Search User
  // const searchUser = async text => {
  //   if (text.length > 0) {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/search/users?q=${text}&Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     // console.log(res.data);
  //     // this.setState({ users: res.data.items, loading: false });
  //     setUsers(res.data.items);
  //     setLoading(false);
  //   }
  // };

  // get single user data
  // const getUser = async username => {
  //   if (username.length > 0) {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/users/${username}?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     // console.log(res.data);
  //     //  this.setState({ user: res.data, loading: false });
  //     setUser(res.data);
  //     setLoading(false);
  //   }
  // };

  //getUserRepos

  //Clear User
  // const clear = () => {
  //   setUsers([]);
  //   setLoading(false);

  //   //this.setState({ users: [], loading: false });
  // };
  // const showAlert = msg => {
  //   //  this.setState({ alert: { msg: msg } });
  //   setAlert({ msg });
  //   setTimeout(() => setAlert(null), 2000);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <Alert />
            <Switch>
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search />
                    <div className='container'>
                      <Users />
                    </div>
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <Fragment>
                    <Userprofile {...props} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
