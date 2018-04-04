import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
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
    </div>
  );
}

export default BookShelf;