import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBar extends Component {
  state = {
    author: '',
    title: ''
  };

  updateTitle = title => {
    this.setState({ title });

    if (title !== '') this.props.onTitleSearch(title);
  };

  updateAuthor = author => {
    this.setState({ author });

    if (author !== '') this.props.onAuthorSearch(author);
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
            placeholder="Search by title"
            value={this.state.title}
            onChange={(event) => this.updateTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Search by author"
            value={this.state.author}
            onChange={(event) => this.updateAuthor(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
