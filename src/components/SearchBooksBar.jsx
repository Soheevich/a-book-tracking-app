import React, { Component } from 'react';
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
          onChange={(event) => props.onUpdate('', event.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={props.author}
          onChange={(event) => props.onUpdate(event.target.value, '')}
        />
      </div>
    </div>
  );
}

export default SearchBar;
