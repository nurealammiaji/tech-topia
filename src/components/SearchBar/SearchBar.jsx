import './SearchBar.css';

const SearchBar = () => {
    return (
        <div>
            <div className='search-bar'>
                <input type='search' placeholder='search products here ...' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;