import { ArtObject } from "../Interfaces/ArtObject";
import { Convert_to_ArtObject } from "./Convert_to_ArtObject";

export function fetch_MET_API(
  search_term: string,
  filter = ""
): Promise<ArtObject[]> {
  return new Promise<ArtObject[]>(async (resolve, reject) => {
    let searchString = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search_term}`;
    switch (filter) {
      case "Artist":
        searchString = `https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${search_term}`;
        break;
      case "Location":
        searchString = `https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=${search_term}&q=${search_term}`;
    }
    try {
      //Get object IDs that match our search
      const response = await fetch(searchString);
      if (!response.ok) {
        throw new Error("API call response error");
      }
      const data: any = await response.json();

      //Get info on each of the found objects (up to 10, I don't want to get rate limited)
      let art_info: any = [];
      try {
        for (let i = 0; i < data.objectIDs.length - 1; i++) {
          if (i < 10) {
            const searchString = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[i]}`;
            const response = await fetch(searchString);
            if (!response.ok) {
              throw new Error("API call response error");
            }
            const artData: any = await response.json();
            art_info.push(artData);
          } else {
            break;
          }
        }
        resolve(Convert_to_ArtObject(art_info, "MET"));
      } catch {
        resolve([]); //Return nothing since no results where found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      reject(Convert_to_ArtObject("", "Error"));
    }
  });
}
