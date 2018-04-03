import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBar extends Component {
  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <div className="search-bar-top">
        <input
          className="search-books"
          type="text"
          placeholder="Search books"
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;