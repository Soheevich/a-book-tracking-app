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
    this.setState({ query });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { books } = this.props;
    const { query } = this.state;

    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter((book) => match.test(book.name));
    } else {
      showingBooks = books;
    }

    showingBooks.sort(sortBy('name'));

    return (
      <div className="search-books-bar">
        <Link className="close-search"  to="/" title="Back to My Reads">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
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
