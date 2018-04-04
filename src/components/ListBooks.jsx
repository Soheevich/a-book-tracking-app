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
          booksList={props.booksList.filter(book => book.bookshelf === "Currently Reading")}
        />
        <BookShelf
          bookShelfTitle="Want to Read"
          booksList={props.booksList.filter(book => book.bookshelf === "Want to Read")}
        />
        <BookShelf
          bookShelfTitle="Read"
          booksList={props.booksList.filter(book => book.bookshelf === "Read")}
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
