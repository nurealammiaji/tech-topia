import './SearchBar.css';

const SearchBar = () => {
    return (
        <div>
            <div className='search-bar'>
                <input type='search' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;