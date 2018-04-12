import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import  * as BooksAPI from './BooksAPI';


class BooksApp extends Component {
  state = {
    books: [],
  };

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then((books) => {
        this.setState({books: books});
      });
  }

  render() {
    console.log('component is mounted, list of books', this.state.books);
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
