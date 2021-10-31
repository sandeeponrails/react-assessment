import React, {useEffect, useState } from "react";


const Search = (props) => {
    const [searchData, setSearchData] = useState();

    useEffect(() => {
        setSearchData(props.searchText);
    },[props]);

    const handleSearch = (e) => {
        props.search(e);
    }

    return (
        <div className="searchContainer float-left ">
            Search: <input data-testid="search" type="text" maxLength={props.maxLength} className="searchInput" value={searchData}  onChange={(e) => {handleSearch(e)}} />
        </div>
    );
}

export default Search;