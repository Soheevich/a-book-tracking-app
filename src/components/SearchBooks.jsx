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
      const formattedBooks = books.items.map((book) => {
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
      this.setState(state => ({ foundBooks: formattedBooks }));
      console.log(this.state.foundBooks);
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          onBookSearch={this.searchBook}
        />
        <SearchBooksResults booksList={this.state.foundBooks}/>
      </div>
    );
  }
}

export default SearchBooks;