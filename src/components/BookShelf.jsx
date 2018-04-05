import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.listOfBooks.map((book) => {
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
    </div>
  );
}

BookShelf.propTypes = {
  listOfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  bookShelfTitle: PropTypes.oneOf(['Currently Reading', 'Want to Read', 'Read'])
};

export default BookShelf;
