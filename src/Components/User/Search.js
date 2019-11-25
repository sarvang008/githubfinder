import React, { useState, useContext } from 'react';
import GithubContext from './../../context/github/githubContext';
import AlertContext from './../../context/alert/alertcontext';
const Search = () => {
  const [text, setText] = useState(''); //first parameter is statename and second parameter is update function name
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter search Value');
    } else {
      githubContext.searchUser(text);
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
        {githubContext.users.length > 0 && (
          <button className='clear' onClick={githubContext.clear} value='Clear'>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
