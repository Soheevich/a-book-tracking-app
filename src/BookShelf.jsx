import React, { Component } from 'react';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

        </ol>
      </div>
    </div>
  );
}

export default BookShelf;