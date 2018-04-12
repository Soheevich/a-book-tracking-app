import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';


class Book extends Component {
  state = {
    book: this.props.book,
    value: 'none',
  };

  componentWillMount() {
    BooksAPI.get(this.state.book.id).then((book) => {
      if (book.shelf !== 'none') {
        this.setState({value: book.shelf});
      }
    });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onShelfChange(
      this.state.book,
      event.target.value
    );
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks ?
                                        this.props.book.imageLinks.thumbnail :
                                        './icons/multiply.svg'})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors && this.props.book.authors[0]}
          <br />
          {this.props.book.authors &&
            this.props.book.authors.length > 1 &&
            this.props.book.authors[1]}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default Book;