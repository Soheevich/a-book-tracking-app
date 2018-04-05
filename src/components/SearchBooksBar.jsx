import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search"  to="/" title="Back to My Reads">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title"
          value={props.title}
          onChange={(event) => props.onUpdate('title', event.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={props.author}
          onChange={(event) => props.onUpdate('author', event.target.value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default SearchBar;
