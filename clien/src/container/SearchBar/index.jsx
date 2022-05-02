import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='recherche'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;