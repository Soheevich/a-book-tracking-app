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

export default SearchBooksResults;
