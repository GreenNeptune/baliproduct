import React, { useState } from 'react';
import './autoComplete.scss';

const AutoComplete = ({ filterProductsByTitle }) => {
  const [search, setSearch] = useState('');
  const [onSearch, setOnSearch] = useState(false);


  const onChange = (e) => {
    const value = e.target.value
    setOnSearch(value)
    setSearch(value);
    filterProductsByTitle(value);
  }

  return (
    <div className="product_auto-complete_wrapper">
      <div className={`product_auto-complete ${onSearch ? 'on_search' : ''}`}>
        <div className="product_auto-complete_search_icon" >
          <i className="fas fa-search" />
        </div>
        <input className="product_auto-complete_input" onChange={onChange} type='text' value={search}
          placeholder='Search...' />
      </div>
    </div>

  )
}

export default AutoComplete