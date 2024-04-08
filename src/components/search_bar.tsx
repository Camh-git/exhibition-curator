import search_icon from "../assets/images/icons/search_white_24dp.svg";
import "../styles/search_bar.css";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { curatorContext } from "../Interfaces/AppContext";
import { isNotBlank } from "../Functions/IsNotBlank";

const SearchBar: React.FC = () => {
  const { updateContext } = useContext(curatorContext);
  const navigate = useNavigate();
  const StartSearch = () => {
    //Get the input values
    const search_query = document.getElementById(
      "search_text"
    ) as HTMLInputElement;
    if (isNotBlank(search_query.value)) {
      //Update the context and go to the results page
      updateContext(search_query.value, "None");
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
      ></input>
      <button onClick={StartSearch}>Add tags</button>
      <button>
        <img src={search_icon} alt="Start search" onClick={StartSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
