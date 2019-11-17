import React from 'react';
import PropTypes from 'prop-types';

class Userprofile extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    return (
      <div>
        {this.props.user.login}
        <br /> {this.props.user.public_repos}
      </div>
    );
  }
}

Userprofile.propTypes = {};

export default Userprofile;
