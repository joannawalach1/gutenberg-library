import React from 'react';
import SearchInput from '../components/searchInput';
import Sidebar from '../components/Sidebar';

const Search = () => {
    return (
        <div className="search">
            <Sidebar /> 
           <SearchInput />
        </div>
    )
}

export default Search