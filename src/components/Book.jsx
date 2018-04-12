import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
  state = {
    value: this.props.shelf ? this.props.shelf : ''
  };

  componentDidMount() {
    // console.log(this.props);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onShelfChange(
      event.target.value,
      this.props.id,
      this.props.title,
      this.props.authors,
      this.props.thumbnail
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
              backgroundImage: `url(${this.props.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">
          {this.props.authors && this.props.authors[0]}
          <br />
          {this.props.authors &&
            this.props.authors.length > 1 &&
            this.props.authors[1]}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
  shelf: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default Book;