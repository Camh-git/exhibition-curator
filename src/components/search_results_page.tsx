import { ArtObject } from "../Interfaces/ArtObject";
import SearchResult from "./Search_result";
import "../styles/search_result.css";

interface ArtObjectListProp {
  ArtObjects: ArtObject[];
}
const SearchResultsPage: React.FC<ArtObjectListProp> = ({ ArtObjects }) => {
  const isEmpty = ArtObjects.length > 0;
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
