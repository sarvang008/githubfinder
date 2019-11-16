import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Useritem from './Useritem';
import { getOuterBindingIdentifiers } from '@babel/types';

class Users extends Component {
  state = {
    users: [
      {
        login: 'mojombo',
        id: 1,

        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',

        html_url: 'https://github.com/mojombo'
      },
      {
        login: 'defunkt',
        id: 2,

        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',

        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt'
      },
      {
        login: 'pjhyett',
        id: 3,

        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',

        url: 'https://api.github.com/users/pjhyett',
        html_url: 'https://github.com/pjhyett'
      }
    ]
  };
  static propTypes = {};

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default Users;
