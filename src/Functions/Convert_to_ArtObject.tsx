import { ArtObject } from "../Interfaces/ArtObject";
export function Convert_to_ArtObject(data: string, sourceAPI: string) {
  switch (sourceAPI) {
    case "VAM":
      break;
    case "MET":
      break;
    default:
      const default_data: ArtObject = {
        id: "0",
        title: "Not found",
        artist: "Not found",
        date: "1/1/1970",
      };
      return default_data;
  }
  return "501";
}
