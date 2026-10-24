function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search">Search Projects</label>
      <input
        id="project-search"
        type="text"
        placeholder="Search by project name..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
