import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter search Value');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='enter '
            onChange={this.onChange}
            value={this.state.text}
          />
          <input type='submit' value='Search' />
          {this.props.showClear && (
            <button className='clear' onClick={this.props.clear} value='Clear'>
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
