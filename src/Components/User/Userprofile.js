import React, { useEffect } from 'react';

const Userprofile = ({ user, match, getUser }) => {
  useEffect(() => {
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
