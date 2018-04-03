import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBooksBar from './components/SearchBooksBar';
import SearchBooksResults from './components/SearchBooksResults';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array,
  }

  state = {
    books: books || [],
  }

  updateBooksList() {
    this.setState({ books });
  }

  render() {
    return (
            <div className="search-books">
              <SearchBooksBar onBooksUpdate={updateBooksList}/>
              <SearchBooksResults books={this.state.books}/>
            </div>
    );
  }
}

export default SearchBooks;