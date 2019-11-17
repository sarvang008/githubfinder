import React from 'react';

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul className='navbar-nav mr-auto'>
        <li>
          <Link to={'/'} className='nav-link'>
            {' '}
            Home{' '}
          </Link>
        </li>
        <li>
          <Link to={'/contact'} className='nav-link'>
            Contact
          </Link>
        </li>
        <li>
          <Link to={'/about'} className='nav-link'>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder'
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Navbar;
