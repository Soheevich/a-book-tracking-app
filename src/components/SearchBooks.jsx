import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {
  state = {
    foundBooks: [],
  }

  searchInTitle(book) {
    BooksAPI.searchInTitle(book).then((books) => {
      // this.setState({ foundBooks: books });
      console.log(books);
    });
  }

  searchInAuthor(book) {
    BooksAPI.searchInAuthor(book).then((books) => {
      // this.setState({ foundBooks: books });
      console.log(books);
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          onTitleSearch={this.searchInTitle}
          onAuthorSearch={this.searchInAuthor}
        />
        <SearchBooksResults booksList={this.state.books}/>
      </div>
    );
  }
}

export default SearchBooks;