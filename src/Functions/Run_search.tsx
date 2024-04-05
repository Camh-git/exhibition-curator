import { useEffect, useState } from "react";
import { ArtObject } from "../Interfaces/ArtObject";
import SearchResultsPage from "../components/search_results_page";
import { fetch_MET_API } from "./Fetch_met_api";
import { fetch_VAM_API } from "./Fetch_vam_api";
import { isNotBlank } from "./IsNotBlank";

interface runSearchProps {
  searchString: string;
  searchType?: string;
}

export const Run_search: React.FC<runSearchProps> = ({
  searchString,
  searchType = "Standard",
}) => {
  console.log("searching: " + searchString);
  const [searchResults, setSearchResults] = useState<ArtObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const VAM_DATA = await fetch_VAM_API(searchString);
      const MET_DATA = await fetch_MET_API(searchString);

      const API_DATA = [...VAM_DATA, ...MET_DATA];
      setSearchResults(API_DATA);
    };
    fetchData();
  });

  return <SearchResultsPage ArtObjects={searchResults} />;
};

export function search_APIs(
  searchString: string,
  searchType = "standard"
): ArtObject[] {
  let API_results: ArtObject[] = [];
  if (isNotBlank(searchString)) {
    const fetchData = async () => {
      const VAM_DATA = await fetch_VAM_API(searchString);
      const MET_DATA = await fetch_MET_API(searchString);

      API_results = [...VAM_DATA, ...MET_DATA];
      console.log(API_results);
    };
    fetchData();
  }
  return API_results;
}
