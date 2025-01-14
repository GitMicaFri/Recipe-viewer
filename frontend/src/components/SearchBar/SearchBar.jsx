import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value); // Skickar söktexten tillbaka till föräldern
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Sök recept, ingredienser..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
