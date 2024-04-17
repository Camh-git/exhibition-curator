import { forEachChild } from "typescript";
import { ArtObject } from "../Interfaces/ArtObject";
import { Convert_to_ArtObject } from "./Convert_to_ArtObject";

export function fetch_VAM_API(
  search_term: string,
  filter = ""
): Promise<ArtObject[]> {
  return new Promise<ArtObject[]>(async (resolve, reject) => {
    let searchString = `https://api.vam.ac.uk/v2/objects/search?q="${search_term}"`;
    switch (filter) {
      case "Artist":
        searchString = `https://api.vam.ac.uk/v2/objects/search?q_actor="${search_term}"`;
        break;
      case "Location":
        searchString = `https://api.vam.ac.uk/v2/objects/search?q_place_name="${search_term}"`;
        break;
    }

    try {
      const response = await fetch(searchString);
      if (!response.ok) {
        throw new Error("API call response error");
      }
      const data: any = await response.json();

      //Get info on each of the found objects
      let art_info: any = [];
      for (const record of data.records) {
        const searchString = `https://api.vam.ac.uk/v2/museumobject/${record.systemNumber}`;
        const response = await fetch(searchString);
        if (!response.ok) {
          throw new Error("API call response error");
        }
        const artData: any = await response.json();
        art_info.push(artData);
      }

      resolve(Convert_to_ArtObject(art_info, "VAM"));
    } catch (error) {
      console.error("Error fetching data:", error);
      resolve([]);
    }
  });
}

//Object specific info: https://api.vam.ac.uk/v2/museumobject/O1137015  , id = systemNumber
