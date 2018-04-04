import React from 'react';
import Book from './Book';

const SearchBooksResults = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.booksList.map((book) => {
          return (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                thumbnail={book.thumbnail}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default SearchBooksResults;