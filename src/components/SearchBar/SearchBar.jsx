import './search-bar.css'

function SearchBar({ globalFilter, setGlobalFilter }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar
