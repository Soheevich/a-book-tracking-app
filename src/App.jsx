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

  changeShelf = (shelf, id, title, authors, thumbnail) => {
    this.setState((prevState, props) => {
      return {books: prevState.books.map((book) => 
        book.id === id ? (
        book.bookshelf = shelf,
        book) :
        book
      )};
    });
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
              onSearchBook={this.searchBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
