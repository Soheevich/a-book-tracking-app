import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';



class SearchBooks extends Component {
  state = {
    query: '',
    foundBooks: []
  }

  update = (value) => {
    this.setState({ query: value }, () => {
      if (this.state.query) {
        this.searchBook(this.state.query);
      } else {
        this.setState(state => ({ foundBooks: [] }));
      }
    });
  }

  searchBook = (query) => {
    BooksAPI.search(query).then(books => {
      let foundedBooks;

      if (books.length) {
        foundedBooks = books;
      } else {
        foundedBooks = [];
      }
      this.setState(state => ({ foundBooks: foundedBooks }));
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          query={this.state.query}
          onUpdate={this.update}
        />
        <SearchBooksResults
          booksList={this.state.foundBooks}
          onShelfChange={this.props.onShelfChange}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;