import search_icon from "../assets/images/icons/search_white_24dp.svg";
import "../styles/search_bar.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { curatorContext } from "../Interfaces/AppContext";
import { isNotBlank } from "../Functions/IsNotBlank";

const SearchBar: React.FC = () => {
  //Get the context and setup state
  const { updateContext } = useContext(curatorContext);
  const [ShowFilters, setShowFilters] = useState(false);
  const [SearchParameter, setSearchParameter] = useState("None");
  const navigate = useNavigate();

  //Search and filter select functions
  const DisplayFilters = () => {
    setShowFilters(!ShowFilters);
  };
  const HandleFilterSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParameter(event.target.value);
  };
  const CheckEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      StartSearch();
    }
  };
  const StartSearch = () => {
    //Get the input values
    const search_query = document.getElementById(
      "search_text"
    ) as HTMLInputElement;
    if (isNotBlank(search_query.value)) {
      //Update the context and go to the results page
      updateContext(search_query.value, SearchParameter);
      navigate("/search-results");
    } else {
      alert("Please enter a search term before searching");
    }
  };

  return (
    <div className="Searchbar_body">
      <input
        type="text"
        id="search_text"
        placeholder="Find a masterpiece..."
        onKeyDown={CheckEnter}
      ></input>
      <br />
      {ShowFilters ? (
        <section className="Search_filters">
          <input
            type="radio"
            name="filter-select"
            id="filter1"
            value="None"
            onChange={HandleFilterSelect}
          />
          <label htmlFor="filter1">None</label>

          <input
            type="radio"
            name="filter-select"
            id="filter2"
            value="Artist"
            onChange={HandleFilterSelect}
          />
          <label htmlFor="filter2">Artist</label>

          <input
            type="radio"
            name="filter-select"
            id="filter3"
            value="Location"
            onChange={HandleFilterSelect}
          />
          <label htmlFor="filter3">Location</label>

          <button onClick={DisplayFilters}>Close</button>
        </section>
      ) : (
        <button onClick={DisplayFilters}>Filters</button>
      )}

      <button>
        <img src={search_icon} alt="Start search" onClick={StartSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
