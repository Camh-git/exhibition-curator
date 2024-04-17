import { ArtObject } from "../Interfaces/ArtObject";
import { Convert_VAM_to_ArtObject } from "./Convert_VAM_to_ArtObject";
import { Convert_MET_to_ArtObject } from "./Convert_MET_to_ArtObject";

export function Convert_to_ArtObject(
  data: string,
  sourceAPI: string
): ArtObject[] {
  let objectList: ArtObject[] = [];

  //Note: only accept peices that have at least a title OR an artist's name
  switch (sourceAPI) {
    case "VAM":
      for (const info of data as any) {
        //Get the piece's image URLs
        const newPiece = Convert_VAM_to_ArtObject(info);
        if (newPiece.collection !== "InvalidObject") {
          objectList.push(newPiece);
        }
      }
      break;

    case "MET":
      for (const record of data as any) {
        const newPiece = Convert_MET_to_ArtObject(record);
        if (newPiece.collection !== "InvalidObject") {
          objectList.push(newPiece);
        }
      }
      break;

    default:
      const default_data: ArtObject = {
        id: "99999",
        title: "Not found",
        artist: "Not found",
        date: "1970",
        location: "None",
        collection: "Default",
        images: ["../assets/images/HTTP_404_animated.gif"],
        onDisplay: false,
        description:
          "The object was not from one of the expected APIs, or was not correctly formed",
      };
      objectList.push(default_data);
  }
  return objectList;
}
