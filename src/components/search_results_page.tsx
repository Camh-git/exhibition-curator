import { ArtObject } from "../Interfaces/ArtObject";
import React, { useState, useContext, useEffect } from "react";
import SearchResult from "./Search_result";
import { curatorContext } from "../Interfaces/AppContext";
import { search_APIs } from "../Functions/Run_search";
import "../styles/search_result.css";

const SearchResultsPage: React.FC = () => {
  const [ArtObjects, setArtObjects] = useState<ArtObject[]>([]);
  const [Searching, setSearching] = useState(true);

  //Get the search parameters
  const { lastSearchString, lastSearchParam } = useContext(curatorContext);
  console.log(
    `Searching for: ${lastSearchString}, paramaters: ${lastSearchParam}`
  );
  //Perform the search and populate the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await search_APIs(lastSearchString, lastSearchParam);
        setSearching(false);
        setArtObjects(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {Searching ? (
        <h3>Searching...</h3>
      ) : (
        <section>
          {ArtObjects.length > 0 ? (
            <p>Number of results: {ArtObjects.length}</p>
          ) : (
            <h3>No results found</h3>
          )}
        </section>
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
