import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER_REPOS
} from '../types';

const GithubState = props => {
  //initial state
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUser = async text => {
    if (text.length > 0) {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      // setUsers(res.data.items);
      dispatch({ type: SEARCH_USERS, payload: res.data.items });
    }
  };
  //Get single user data
  const getUser = async username => {
    if (username.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(res.data);
      //  this.setState({ user: res.data, loading: false });
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    }
  };
  //getUSerRepos
  const getUserRepos = async username => {
    if (username.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(res.data);
      //  this.setState({ user: res.data, loading: false });
      dispatch({
        type: GET_USER_REPOS,
        payload: res.data
      });
    }
  };

  //clear User
  const clear = () => {
    dispatch({ type: CLEAR_USERS });

    //this.setState({ users: [], loading: false });
  };
  //Set Loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //Clear USer

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUser,
        clear,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
