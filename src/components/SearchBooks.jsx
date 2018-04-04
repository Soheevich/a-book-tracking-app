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
      let formattedBooks;

      if (books.items) {
        formattedBooks = books.items.map((book) => {
          return {
            bookshelf: null,
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            thumbnail: book.volumeInfo.imageLinks ?
              book.volumeInfo.imageLinks.thumbnail :
              null
          }
        });
      } else {
        formattedBooks = [];
      }
      this.setState(state => ({ foundBooks: formattedBooks }));
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          onBookSearch={this.searchBook}
        />
        <SearchBooksResults
          booksList={this.state.foundBooks}
          onShelfChange={this.props.onShelfChange}
        />
      </div>
    );
  }
}

export default SearchBooks;