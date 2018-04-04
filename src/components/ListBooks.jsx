import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


const ListBooks = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          bookShelfTitle="Currently Reading"
          listOfBooks={props.booksList.filter(book => book.bookshelf === "currentlyReading")}
          onShelfChange={props.onShelfChange}
        />
        <BookShelf
          bookShelfTitle="Want to Read"
          listOfBooks={props.booksList.filter(book => book.bookshelf === "wantToRead")}
          onShelfChange={props.onShelfChange}
        />
        <BookShelf
          bookShelfTitle="Read"
          listOfBooks={props.booksList.filter(book => book.bookshelf === "read")}
          onShelfChange={props.onShelfChange}
        />
      </div>
      <div className="open-search">
        <Link to="/search" title="Add a new Book">
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default ListBooks;
