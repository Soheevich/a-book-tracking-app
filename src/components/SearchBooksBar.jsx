import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBar extends Component {
  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query });

    if (query !== '') this.props.onBookSearch(query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search"  to="/" title="Back to My Reads">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
