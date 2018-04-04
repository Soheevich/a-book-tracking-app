import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {
  state = {
    foundBooks: [],
  }

  searchBook = (author, title) => {
    BooksAPI.searchBook(author, title).then(books => {
      this.setState(state => ({ foundBooks: books }));
      console.log(this.state.foundBooks);
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          onBookSearch={this.searchBook}
        />
        <SearchBooksResults booksList={this.state.books}/>
      </div>
    );
  }
}

export default SearchBooks;