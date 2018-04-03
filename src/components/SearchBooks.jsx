import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {
  state = {
    foundBooks: [],
  }

  searchBook(book) {
    BooksAPI.search(book).then((books) => {
      // this.setState({ foundBooks: books });
      console.log(books);
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar onBookSearch={this.searchBook}/>
        <SearchBooksResults booksList={this.state.books}/>
      </div>
    );
  }
}

export default SearchBooks;