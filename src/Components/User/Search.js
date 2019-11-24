import React, { useState } from 'react';

const Search = ({ showClear, setAlert, searchUser, clear }) => {
  const [text, setText] = useState(''); //first parameter is statename and second parameter is update function name
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter search Value');
    } else {
      searchUser(text);
      setText('');
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
          value={text}
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
