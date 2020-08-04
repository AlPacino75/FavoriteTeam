import React from 'react';
import './Search.css';


const Search = props => {
  const {  searchQuery, onChange, search  } = props;
  
  return (

    <div className="search-header">
      <div>
      <input
        placeholder="Enter at least 4 letters"
        type="text"
        value={searchQuery}
        onChange={onChange}
      />
      <button onClick={search}>Search</button>
      </div>
      
    </div>

  );
}

export default Search;

