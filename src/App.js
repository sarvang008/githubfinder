import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import Users from "./Components/User/Users";
import axios from "axios";
import Search from "./Components/User/Search";
import Alert from "./Components/Layout/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Userprofile from "./Components/User/Userprofile";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});

 /**
 * Search a text
 * @param text the text that will be searched
 */
  const searchUser = async (text) => {
    if (text.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);
      setLoading(false);
    }
  };

 /**
 * Get user from git
 * @param username the username that will be searched
 */
  const getUser = async (username) => {
    if (username.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}?Client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUser(res.data);
      setLoading(false);
    }
  };
  const clear = () => {
    setUsers([]);
    setLoading(false);
  };
  const showAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Search
                  searchUser={searchUser}
                  clear={clear}
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <div className="container">
                  <Users users={users} loading={loading} />
                </div>
              </Fragment>
            )}
          />
          <Route
            exact
            path="/user/:login"
            render={(props) => (
              <Fragment>
                <Userprofile
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
