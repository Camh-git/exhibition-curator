import { ArtObject } from "../Interfaces/ArtObject";
import { Convert_to_ArtObject } from "./Convert_to_ArtObject";

export function fetch_VAM_API(): Promise<ArtObject[]> {
  return new Promise<ArtObject[]>(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://api.vam.ac.uk/v2/objects/search?q_place_name="london"'
      );
      if (!response.ok) {
        throw new Error("API call response error");
      }
      const data: any = await response.json();
      resolve(Convert_to_ArtObject(data.records, "VAM"));
    } catch (error) {
      console.error("Error fetching data:", error);
      reject(Convert_to_ArtObject("", "Error"));
    }
  });
}
