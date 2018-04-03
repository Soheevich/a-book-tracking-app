import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class BooksApp extends React.Component {
  state = {

  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks />
          )}
        />
        <Route path="/search" render={({ history }) => (
            <div className="search-books">
              <SearchBooksBar />
              <SearchBooksResults />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
