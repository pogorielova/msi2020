import React from 'react';

const SearchInput = ({handleSearchInput, value}) => {
    
    return (
        <div>
            <input type="text" className="srch-input" placeholder="Free text search..." onChange={handleSearchInput} value={value} />
        </div>
    
    )
}

export default SearchInput;
