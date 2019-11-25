import React, { useContext } from 'react';

import AlertContext from './../../context/alert/alertcontext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert !== null && (
      <div className='alertmsg'>{alertContext.alert.msg}</div>
    )
  );
};
export default Alert;
