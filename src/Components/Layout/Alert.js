import React from 'react';

const Alert = ({ alert }) => {
  return alert !== null && <div className='alertmsg'>{alert.msg}</div>;
};
export default Alert;
