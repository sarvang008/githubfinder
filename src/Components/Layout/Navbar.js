import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    icon: 'fab fa-github',
    title: 'Github Finder'
  };
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className='navbar'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
