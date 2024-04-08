import { ArtObject } from "../Interfaces/ArtObject";
import React, { useState, useContext } from "react";
import SearchResult from "./Search_result";
import { curatorContext } from "../Interfaces/AppContext";
import { search_APIs } from "../Functions/Run_search";
import "../styles/search_result.css";

const SearchResultsPage: React.FC = () => {
  const [ArtObjects, setArtObjects] = useState<ArtObject[]>([]);
  const isEmpty = ArtObjects.length > 0;

  //Get the search parameters
  const { lastSearchString, lastSearchParam, updateContext } =
    useContext(curatorContext);
  console.log(
    `Searching for: ${lastSearchString}, paramaters: ${lastSearchParam}`
  );
  //Perform the search and populate the state
  const new_data = React.useMemo(() => {
    setArtObjects(search_APIs(lastSearchString, lastSearchParam));
  }, []);

  return (
    <section>
      {isEmpty ? (
        <p>Number of results: {ArtObjects.length}</p>
      ) : (
        <h3>No results found</h3>
      )}
      <ul className="Search_obj_container">
        {ArtObjects.map((object) => (
          <SearchResult ArtObject={object} key={ArtObjects.indexOf(object)} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResultsPage;
