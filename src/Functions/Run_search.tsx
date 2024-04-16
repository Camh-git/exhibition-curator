import { ArtObject } from "../Interfaces/ArtObject";
import { fetch_MET_API } from "./Fetch_met_api";
import { fetch_VAM_API } from "./Fetch_vam_api";
import { isNotBlank } from "./IsNotBlank";

export function search_APIs(
  searchString: string,
  searchType = "None"
): Promise<ArtObject[]> {
  return new Promise<ArtObject[]>(async (resolve, reject) => {
    let API_results: ArtObject[] = [];
    if (isNotBlank(searchString)) {
      try {
        const fetchData = async () => {
          const VAM_DATA = await fetch_VAM_API(searchString, searchType);
          const MET_DATA = await fetch_MET_API(searchString, searchType);

          API_results = [...VAM_DATA, ...MET_DATA];
          resolve(API_results);
        };
        fetchData();
      } catch (error) {
        reject([]);
      }
    }
  });
}
