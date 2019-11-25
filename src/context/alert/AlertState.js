import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertContext from './alertcontext';
import AlertReducer from './alertReducer';

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = msg => {
    //  this.setState({ alert: { msg: msg } });
    dispatch({ type: SET_ALERT, payload: { msg } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
