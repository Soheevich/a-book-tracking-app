import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  state = {
    books: this.props.books || [],
  }

  updateBooksList(props) {
    this.setState({ books: this.props.books});
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar onBooksUpdate={this.updateBooksList}/>
        <SearchBooksResults booksList={this.state.books}/>
      </div>
    );
  }
}

export default SearchBooks;