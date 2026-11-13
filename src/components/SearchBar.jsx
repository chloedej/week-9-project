function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar; 