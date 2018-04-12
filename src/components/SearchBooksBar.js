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
          placeholder="Search"
          value={props.query}
          onChange={(event) => props.onUpdate(event.target.value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default SearchBar;
