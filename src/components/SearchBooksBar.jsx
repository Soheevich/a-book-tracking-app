import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    author: '',
    title: ''
  };

  updateTitle = title => {
    this.setState({ title });

    if (title !== '') this.props.onBookSearch(this.state.author, title);
  };

  updateAuthor = author => {
    this.setState({ author });

    if (author !== '') this.props.onBookSearch(author, this.state.title);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search"  to="/" title="Back to My Reads">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title"
            value={this.state.title}
            onChange={(event) => this.updateTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Search by author"
            value={this.state.author}
            onChange={(event) => this.updateAuthor(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
