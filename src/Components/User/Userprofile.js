import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Userprofile = ({ user, match, getUser }) => {
  // componentDidMount() {
  //   this.props.getUser(match.params.login);
  // }
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
