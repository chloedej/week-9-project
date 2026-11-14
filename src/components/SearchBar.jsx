function SearchBar({ searchTerm, setSearchTerm }) {

    return (
        <input
            className="recipe-search"
            type="text"
            placeholder="Search for a recipe..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
        />
    );
}

export default SearchBar;