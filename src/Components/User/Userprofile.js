import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from './../../context/github/githubContext';

const Userprofile = ({ match }) => {
  // componentDidMount() {
  //   this.props.getUser(match.params.login);
  // }
  const guthubContext = useContext(GithubContext);
  const { getUser, user, loading } = guthubContext;
  useEffect(() => {
    //useeffect used as componentdidmount
    getUser(match.params.login);
    //eslint-disable-next-line
  }, []); //empty brackets so only calls once

  return (
    <div>
      {user.login}
      <br /> {user.public_repos}
      <br />
      {user.type}
      <br />
      {user.email}
      <br />
      {user.company}
    </div>
  );
};

Userprofile.propTypes = {};

export default Userprofile;
