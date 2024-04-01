import search_icon from "../assets/images/icons/search_white_24dp.svg";
const SearchBar: React.FC = () => (
  <div className="Searchbar_body">
    <input
      type="text"
      id="search_text"
      placeholder="Find a masterpiece"
    ></input>
    <button>Add tags</button>
    <button>
      <img src={search_icon} alt="Start search" />
    </button>
  </div>
);

export default SearchBar;
