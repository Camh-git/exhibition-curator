import search_icon from "../assets/images/icons/search_white_24dp.svg";
import "../styles/search_bar.css";
import { search_APIs } from "../Functions/Run_search";
import { isNotBlank } from "../Functions/IsNotBlank";
import SearchResultsPage from "./search_results_page";
import { useNavigate } from "react-router-dom";

function StartSearch() {
  //const navigate = useNavigate();
  const search_query = document.getElementById(
    "search_text"
  ) as HTMLInputElement;
  if (isNotBlank(search_query)) {
    //const searchData = search_APIs(search_query.value);
    return <SearchResultsPage ArtObjects={search_APIs(search_query.value)} />;
    //navigate(`/search-results?q=${encodeURIComponent(search_query.value)}`);
  }
}

const SearchBar: React.FC = () => (
  <div className="Searchbar_body">
    <input
      type="text"
      id="search_text"
      placeholder="Find a masterpiece..."
    ></input>
    <button onClick={StartSearch}>Add tags</button>
    <button>
      <img src={search_icon} alt="Start search" onClick={StartSearch} />
    </button>
  </div>
);

export default SearchBar;
