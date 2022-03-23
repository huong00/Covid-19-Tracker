import React from 'react';
import '../styles/search.css';

function Search(props) {


    return (
        <div className="search-container">
        <form action className="search">
          <input className="search__input" type="search" placeholder="Search" id="searchInput" />
          <div className="search__icon-container">
            <label htmlFor="searchInput" className="search__label" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z" /></svg>
            </label>
            <button className="search__submit" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z" /></svg>
            </button>
          </div>
        </form>
      </div>
    );
}

export default Search;