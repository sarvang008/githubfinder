import React, { useState } from 'react';

const Search = ({ showClear, setAlert, searchUser, clear }) => {
  state = {
    text: ''
  };
  const onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      setAlert('Please enter search Value');
    } else {
      searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='enter '
          onChange={onChange}
          value={this.state.text}
        />
        <input type='submit' value='Search' />
        {showClear && (
          <button className='clear' onClick={clear} value='Clear'>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
