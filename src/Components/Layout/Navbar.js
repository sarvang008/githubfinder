import React from 'react';

import { PropTypes } from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
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
