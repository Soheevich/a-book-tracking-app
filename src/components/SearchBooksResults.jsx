import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const SearchBooksResults = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.booksList.map((book) => {
          return (
            <li key={book.id}>
              <Book
                bookshelf={book.bookshelf}
                id={book.id}
                title={book.title}
                authors={book.authors}
                thumbnail={book.thumbnail}
                onShelfChange={props.onShelfChange}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

SearchBooksResults.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default SearchBooksResults;
