import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {
  state = {
    author: '',
    title: '',
    foundBooks: []
  }

  update = (author, title) => {
    this.setState({ author, title },
    () => {
      if (this.state.author || this.state.title) {
        this.searchBook(this.state.author, this.state.title);
      } else {
        console.log('clear books');
        this.setState(state => ({ foundBooks: [] }));
      }
    });
  }

  searchBook = (author, title) => {
    console.log(
      `?q=${title ? title : ''}+inauthor:${author ? author : ''}&maxResults=20`
    );
    BooksAPI.searchBook(author, title).then(books => {
      let formattedBooks;

      if (books.items) {
        formattedBooks = books.items.map(book => {
          return {
            bookshelf: null,
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            thumbnail: book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : null
          };
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
          author={this.state.author}
          title={this.state.title}
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

export default SearchBooks;