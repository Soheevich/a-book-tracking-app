import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';



class SearchBooks extends Component {
  state = {
    author: '',
    title: '',
    foundBooks: []
  }

  update = (type, value) => {
    this.setState({ [type]: value }, () => {
      if (this.state.author || this.state.title) {
        this.searchBook(this.state.author, this.state.title);
      } else {
        this.setState(state => ({ foundBooks: [] }));
      }
    });
  }

  searchBook = (author, title) => {
    // console.log(
    //   `?q=${title ? title : ''}+inauthor:${author ? author : ''}&maxResults=20`
    // );
    BooksAPI.searchBook(author, title).then(books => {
      let formattedBooks;

      if (books.items) {
        formattedBooks = books.items.map(book => {
          return {
            bookshelf: 'none',
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            thumbnail: book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : 'none'
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

SearchBooks.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;