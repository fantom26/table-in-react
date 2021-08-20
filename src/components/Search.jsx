const Search = ({tableSearch}) => {
    return (
        <div>
            <h2>Search</h2>
            <input className='ps-3 pe-3 border rounded' type="text" placeholder="Search by items per page"
                   id="search-text"
                   onKeyUp={tableSearch}/>
        </div>
    );
};

export default Search;