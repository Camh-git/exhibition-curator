import { ArtObject } from "../Interfaces/ArtObject";
import SearchResult from "./Search_result";
import "../styles/search_result.css";

interface ArtObjectListProp {
  ArtObjects: ArtObject[];
}
const SearchResultsPage: React.FC<ArtObjectListProp> = ({ ArtObjects }) => {
  return (
    <section>
      <p>Number of results: {ArtObjects.length}</p>
      <ul className="Search_obj_container">
        {ArtObjects.map((object) => (
          <SearchResult ArtObject={object} key={ArtObjects.indexOf(object)} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResultsPage;
