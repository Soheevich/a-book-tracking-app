import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import books from './components/StartingLibraryList';


class BooksApp extends Component {
  state = {
    books
  };

  componentDidMount = () => {
    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books });
    //   console.log(this.state.books);
    // });

    // BooksAPI.update(book, shelf);
    console.log(this.state.books)
  };

  addBook = (book) => {
    this.setState((prevState, book) => {
      return { books: prevState.books.concat(book) };
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => <ListBooks booksList={this.state.books} />}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              onAddBook={book => {
                this.addBook(book);
                history.push('/');
              }}
              onSearchBook={this.searchBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
