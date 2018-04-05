import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import books from './components/StartingLibraryList';


class BooksApp extends Component {
  state = {
    books
  };

  changeShelf = (bookshelf, id, title, authors, thumbnail) => {
    if (bookshelf === 'none') {
      this.setState((prevState, props) => {
        return {books: prevState.books.filter((book) => {
          return book.id !== id;
        })};
      });
    } else if (this.state.books.findIndex((book) => book.id === id) > -1) {
      this.setState((prevState, props) => {
        return {books: prevState.books.map((book) => 
          book.id === id ? (
          book.bookshelf = bookshelf,
          book) :
          book
        )};
      });
    } else {
      this.setState((prevState, props) => {
        return {books: prevState.books.concat(
          {
            bookshelf,
            id,
            title,
            authors,
            thumbnail
          }
        )};
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <ListBooks
              booksList={this.state.books}
              onShelfChange={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              onShelfChange={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
