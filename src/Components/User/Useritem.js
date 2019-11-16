import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Useritem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    html_url: 'https://github.com/mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4'
  };
  static propTypes = {
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
  };
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    console.log(this.props.avatar_url);
    return (
      <div className='card'>
        <img
          src={avatar_url}
          alt='avatar'
          style={{ width: '50px', borderRadius: '50%' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url}>More</a>
        </div>
      </div>
    );
  }
}
export default Useritem;
