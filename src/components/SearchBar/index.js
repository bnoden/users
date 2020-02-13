import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './searchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }

  handleChange = () => {
    let qs = this.input.current.value;
    let timeout = qs > 2 ? 200 : 1200;
    setTimeout(() => {
      if (this.props.getUsers) {
        this.props.getUsers(()=>this.input.current.value);
      }
    }, timeout);
  }

  render() {
    return (
      <div className="form-group has-search">
        <div className="search-bar-icon">
          <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
        </div>
        <form>
          <input
            className="form-control"
            ref={this.input}
            type="text"
            placeholder="Search for name, email, or ID"
            style={{ width: 600 }}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export {SearchBar};
