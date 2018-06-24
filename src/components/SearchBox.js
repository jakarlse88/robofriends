import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <form>
        <label for="robo-search">Robo-Search
        <input
            id="robo-search"
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBox;