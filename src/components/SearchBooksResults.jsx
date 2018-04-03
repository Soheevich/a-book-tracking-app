import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchBooksResults = (props) => {
  static propTypes = {
    books: PropTypes.array,
  }

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        
      </ol>
    </div>
  );
}

export default SearchBooksResults;